import axios from 'axios';
import md5 from 'crypto-js/md5';

const baseURL = 'http://localhost:8080/api/v1';
let customerId;
let totalPrice;
let checkoutData = {};
function paymentGateway(paymentData) {
  customerId = paymentData.customer_Id;
  totalPrice = paymentData.payment;
  checkoutData.customerId = paymentData.customer_Id;
  checkoutData.totalPrice = paymentData.payment;
  checkoutData.shoppingCartItems = paymentData.shoppingCartItems;
  checkoutData.billingName = paymentData.billingName;
  checkoutData.billingAddressLine1 = paymentData.billingAddressLine1;
  checkoutData.billingAddressLine2 = paymentData.billingAddressLine2;
  checkoutData.billingCity = paymentData.billingCity;
  checkoutData.billingZipcode = paymentData.billingZipcode;
  let merchantSecret =
    'MzExMzI1NzQ3NzM3MTE3NDU4NTIyNjMwNjE2Nzc1MjE1NDk4MDU2MQ==';
  let merchantId = '1224539';
  let orderId = '12345';
  let amount = 1000;
  let hashedSecret = md5(merchantSecret).toString().toUpperCase();
  let amountFormated = parseFloat(amount)
    .toLocaleString('en-us', { minimumFractionDigits: 2 })
    .replaceAll(',', '');
  let currency = 'LKR';
  let hashvalue = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret,
  )
    .toString()
    .toUpperCase();

  // Define the data you want to send in the POST request
  const requestData = {
    amount: paymentData.payment,
    customerId: paymentData.customerId,
  };

  axios
    .post(baseURL + '/payment/paymentDetails', requestData)
    .then((response) => {
      // Payment completed. It can be a successful failure.
      let obj = response.data;
      console.log(obj);
      var cancel_url = '';

      // Put the payment variables here
      var paymentReqData = {
        address: 'No.1, Galle Road',
        amount: '10000.00',
        cancel_url: 'http://localhost:3000/billing', // Important
        city: 'Colombo',
        country: 'Sri Lanka',
        currency: 'LKR',
        custom_1: '',
        custom_2: '',
        delivery_address: 'No. 46, Galle road, Kalutara South',
        delivery_city: 'Kalutara',
        delivery_country: 'Sri Lanka',
        email: 'samanp@gmail.com',
        first_name: 'Saman',
        hash: hashvalue, // *Replace with generated hash retrieved from backend
        items: 'Door bell wireles',
        last_name: 'Perera',
        merchant_id: '1224539', // Replace your Merchant ID
        notify_url: 'http://sample.com/notify',
        order_id: 'ItemNo12345',
        phone: '0771234567',
        return_url: 'http://localhost:3000/', // Important
        sandbox: true,
      };

      // eslint-disable-next-line no-undef
      console.log(paymentReqData);
      payhere.startPayment(paymentReqData);
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });
}

// eslint-disable-next-line no-undef
payhere.onCompleted = function onCompleted() {
  axios
    .post(baseURL + '/payment/checkout', checkoutData)
    .then((response) => {
      // Handle the response if needed
      // You can access response.data for the response data
      window.location.href = 'http://localhost/profile';
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
    });
};

// eslint-disable-next-line no-undef
payhere.onDismissed = function onDismissed() {
  // Note: Prompt user to pay again or show an error page
  console.log('Payment dismissed');
};

// Error occurred
// eslint-disable-next-line no-undef
payhere.onError = function onError(error) {
  // Note: show an error page
  console.log('Error:' + error);
};

export default paymentGateway;
