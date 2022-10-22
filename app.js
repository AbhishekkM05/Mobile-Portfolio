//form-validation 
const form = document.querySelector('#form');
const inputEmail = document.querySelector('#email');

const validateEmail = (email) => {
  if (email === email.toLowerCase()) return true;
  return false;
};

form.addEventListener('submit', (e) => {
  const invalidMessage = 'Email should be lowercase letters';
  const messageDisplay = document.getElementById('message');
  e.preventDefault();

  if ((!validateEmail(inputEmail.value.trim()))) {
    messageDisplay.innerHTML = invalidMessage;
    messageDisplay.classList.add('message');
  } else {
    messageDisplay.innerHTML = '';
    form.submit();
  }
});

//local storage 
