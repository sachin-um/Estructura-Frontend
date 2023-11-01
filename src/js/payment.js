import axios from 'axios';
<script
  src="https://www.payhere.lk/lib/payhere.js"
  type="text/javascript"
></script>;
const baseURL = 'http://localhost:8080/api/v1/';
let customerId;
let totalPrice;
let checkoutData;
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

  // Define the data you want to send in the POST request
  const requestData = {
    amount: paymentData.payment,
    customerId: paymentData.customerId,
    serviceProviderID: paymentData.serviceProviderID,
  };

  axios
    .post(baseURL + '/payment/paymentDetails', requestData)
    .then((response) => {
      // Payment completed. It can be a successful failure.
      let obj = response.data;

      var cancel_url = '';

      // Put the payment variables here
      var paymentReqData = {
        address: obj.address,
        amount: obj.amount,
        cancel_url: cancel_url, // Important
        city: obj.city,
        country: 'Sri Lanka',
        currency: obj.currency,
        custom_1: '',
        delivery_address: 'No. 46, Galle road, Kalutara South',
        delivery_city: 'Kalutara',
        delivery_country: 'Sri Lanka',
        email: obj.email,
        first_name: obj.first_names,
        hash: obj.hash,
        items: 'Payment to ' + paymentData.serviceProviderID,
        last_name: obj.last_name,
        merchant_id: '1223006',
        notify_url: 'http://sample.com/notify',
        order_id: obj.order_id,
        phone: obj.phone,
        return_url: baseURL + '/Pages/Home', // Important
        sandbox: true,
      };

      // eslint-disable-next-line no-undef
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
