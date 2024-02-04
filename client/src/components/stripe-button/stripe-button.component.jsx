import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const totalPriceInCents = price * 100;
  const pk =
    "pk_test_51HYVdEAWHvpqchAMSNz2jQVMTSpWPMHCl9niFAqYJRObbHEOkLRaOom5zZYQt7PnSbjmYFzhN9PviI6Aak3kRwnQ00P3gQXA0P";

  const onToken = (token) => {
    console.log(token);
    alert("payment processed");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      billingAddress
      shippingAddress
      name="CRWN CLOTHING"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is ${price}$`}
      amount={totalPriceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pk}
    />
  );
};

export default StripeCheckoutButton;
