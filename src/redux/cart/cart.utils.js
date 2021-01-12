export const addNewCartItem = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const reduceCartItemQuantity = (cartItemsArr, cartItem) => {
  const item = cartItemsArr.find((el) => el.id === cartItem.id);

  if (item.quantity === 1) {
    return cartItemsArr.filter((item) => item.id !== cartItem.id);
  }

  return cartItemsArr.map((item) => {
    return item.id === cartItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};
