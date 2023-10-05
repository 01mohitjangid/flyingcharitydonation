import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';

const RazorpayForm = () => {
  const [formData, setFormData] = useState({
    name: 'name',
    email: '',
    contact: '',
    amount: 1000, // Default payment amount (in paise)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_xdXIVZkNahIKJl', // Replace with your API Key
      amount: formData.amount * 100, // Use the amount from the form data
      currency: 'INR', // Replace with your preferred currency code
      name: 'flying.charityfoundation',
      description: 'Payment for Products/Services',
      image: 'https://your-company-logo.png', // Replace with your logo URL
      handler: function (response) {
        // Handle the payment success
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Container maxW="lg" p={4}>
      <Heading as="h1" mb={4}>
        Payment Form
      </Heading>
      <form>
        <FormControl mb={4}>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Contact:</FormLabel>
          <Input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Amount:</FormLabel>
          <Input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handlePayment}>
          Pay Now
        </Button>
      </form>
    </Container>
  );
};

export default RazorpayForm;
