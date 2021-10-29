import Spinner from "../spinner/spinner.component";

// this is a higher order function(HOC) which means that this type of function takes a component and returns an improved component or a
// different component
export const withSpinner =
  (InputComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <InputComponent {...otherProps} />;
  };
