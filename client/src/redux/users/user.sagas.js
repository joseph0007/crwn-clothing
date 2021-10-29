import { takeLatest, put, call, all, takeEvery } from "redux-saga/effects";
import userTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserDocDB,
  userRef,
} from "../../utils/firebase/firebase.utils";
import {
  userLogoutSuccess,
  userLogoutFailure,
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from "./users.actions";

export function* getUserSnapShot(userAuth) {
  try {
    const userDocRef = yield call(createUserDocDB, userAuth);
    const userSnapShot = yield userDocRef.get();

    // console.log("user Obj", userSnapShot);

    yield put(signInSuccess(userSnapShot));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

/* ----------------------------- google sign in ----------------------------- */
export function* googleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getUserSnapShot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isGoogleSignIn() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignInStart);
}

/* ------------------------------ email sign in ----------------------------- */
export function* emailAndPassLogin({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapShot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* emailAndPassLoginAsync() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailAndPassLogin);
}

/* ------------------- check user session for persistence ------------------- */

export function* checkUserAuth() {
  try {
    const userDocRef = yield userRef();

    // console.log(userDocRef);

    if (!userDocRef) return;

    yield getUserSnapShot(userDocRef);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* checkUserAuthAsync() {
  yield takeEvery(userTypes.CHECK_USER_AUTH_STATE, checkUserAuth);
}

/* --------------------------------- logout --------------------------------- */
export function* logout() {
  try {
    const userRef = yield auth.signOut();

    console.log(userRef);

    yield put(userLogoutSuccess());
  } catch (error) {
    yield put(userLogoutFailure(error));
  }
}

export function* userLogoutAsync() {
  yield takeEvery(userTypes.USER_LOGOUT_START, logout);
}

/* --------------------------------- sign up -------------------------------- */
export function* emailAndPassSignUp({ payload }) {
  try {
    const { email, password, name } = payload;

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    const userRef = yield call(createUserDocDB, user, { displayName: name });
    const userSnapShot = yield userRef.get();

    yield put(signUpSuccess(userSnapShot));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* emailAndPassSignUpAsync() {
  yield takeLatest(userTypes.SIGN_UP_START, emailAndPassSignUp);
}

export function* userSagas() {
  yield all([
    call(isGoogleSignIn),
    call(userLogoutAsync),
    call(emailAndPassLoginAsync),
    call(checkUserAuthAsync),
    call(emailAndPassSignUpAsync),
  ]);
}
