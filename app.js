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
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('msg');
if (localStorage.getItem('ContactForm')) {
  const data = JSON.parse(localStorage.getItem('ContactForm'));
  document.getElementById('name').value = data.name;
  document.getElementById('email').value = data.email;
  document.getElementById('msg').value = data.message;
}
function addLocalStorage(data) {
  const dict = JSON.parse(localStorage.getItem('ContactForm'));
  const newdict = { ...dict, ...data };
  localStorage.setItem('ContactForm', JSON.stringify({ ...newdict }));
}
name.onchange = (e) => {
  addLocalStorage({ name: e.target.value });
};
email.onchange = (e) => {
  addLocalStorage({ email: e.target.value });
};
message.onchange = (e) => {
  addLocalStorage({ message: e.target.value });
};
