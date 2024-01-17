const Mailgen = require('mailgen');

const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Cardvo',
        link: process.env['NODE_ENV'] === 'development' ?
                        'http://localhost:5173' :
                        'https://cardvo.netlify.app'
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
    }
});

/**
 * 
 * @param {String} name 
 * @returns Object
 */
function generateSignupEmailTemplate(name) {
  const signupEmail = {
      body: {
          name,
          intro: 'Welcome to Cardvo! We\'re very excited to have you on board.',
          action: {
              instructions: 'To get started with Cardvo, please click here:',
              button: {
                  color: '#22BC66',
                  text: 'View Card Designs',
                  link: process.env['NODE_ENV'] === 'development' ?
                        'http://localhost:5173/explore' :
                        'https://cardvo.netlify.app/explore'
              }
          },
          outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
      }
  };

  const emailBody = mailGenerator.generate(signupEmail);
  const emailText = mailGenerator.generatePlaintext(signupEmail);
  return { html: emailBody, text: emailText };
}

function generateConfirmPasswordChangeTemplate(name) {
  const email = {
      body: {
          name,
          intro: 'This is to confirm that you have successfully changed your password on cardvo',
          action: {
              instructions: 'To view your profile information, click the button below',
              button: {
                  color: '#22BC66',
                  text: 'View Card Designs',
                  link: process.env['NODE_ENV'] === 'development' ?
                        'http://localhost:5173/dashboard/profile' :
                        'https://cardvo.netlify.app/dashboard/profile'
              }
          },
          outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
      }
  };

  const emailBody = mailGenerator.generate(email);
  const emailText = mailGenerator.generatePlaintext(email);
  return { html: emailBody, text: emailText };
}

module.exports = {
  generateConfirmPasswordChangeTemplate,
  generateSignupEmailTemplate
}