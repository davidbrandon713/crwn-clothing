import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart-selector';
import { selectCurrentUser } from '../../store/user/user-selector';

import { BUTTON_TYPE_CLASSES } from '../button/button-component';

import { FormContainer, PaymentButton, Warning } from './payment-form-styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <FormContainer onSubmit={paymentHandler}>
      <Warning>*&nbsp;*&nbsp;*&nbsp;&nbsp;Must disable adblock to simulate payment&nbsp;&nbsp;*&nbsp;*&nbsp;*</Warning>
      <Warning>4242 4242 4242 4242&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;04/24&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;242&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42424</Warning>
      <h2>Card Payment:</h2>
      <CardElement />
      <PaymentButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        isLoading={isProcessingPayment}
      >
        Pay Now
      </PaymentButton>
    </FormContainer>
  );
};
export default PaymentForm;