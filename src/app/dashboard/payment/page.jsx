"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "@/components/Checkout-form/CheckoutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
     axios.post(`${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/create_payment_intent`,{ items: [{ id: "xl-tshirt" }]} )
  
      .then((data) => {
        //console.log(data?.data);
        setClientSecret(data?.data?.clientSecret)});
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientS={clientSecret} />
        </Elements>
      )}
    </div>
  );
}
import React from 'react'
