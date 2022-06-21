const { Solver } = require('2captcha');
const { readFileSync } = require('fs');

const { API_KEY } = require('./config');

const solver = new Solver(API_KEY);

(async () => {
  try {
    const imageBase64File = await readFileSync('./captcha-image.png', 'base64');
    const response = await solver.imageCaptcha(imageBase64File);

    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
