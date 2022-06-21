const { Solver } = require('2captcha');

const { API_KEY } = require('./config');

const solver = new Solver(API_KEY);

(async () => {
  try {
    const response = await solver.recaptcha(
      '6LfW6wATAAAAAHLqO2pb8bDBahxlMxNdo9g947u9',
      'https://recaptcha-demo.appspot.com/recaptcha-v2-checkbox.php'
    );

    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
