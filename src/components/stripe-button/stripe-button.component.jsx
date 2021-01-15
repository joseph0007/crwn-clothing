import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const totalPriceInCents = price * 100;
  const pk =
    "pk_test_51HdVPkGONLSY38qKTtDz91jbnvO12EAQ8yBI0BrZMD3xAbsvL2ChmTHT8k0hRrudfVBRJpDa8Fx6Q0qlTSB9fjo5003woFNwsG";

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
