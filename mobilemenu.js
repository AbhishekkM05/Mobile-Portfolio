const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  const span = document.createElement('span');
  span.innerHTML += '<span>&times;</span>';
  span.classList.add('close');
  nav.appendChild(span);
  if (nav.style.display === 'inline-block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
    nav.classList.add('nav-style');
    span.addEventListener('click', () => {
      nav.style.display = 'none';
    });
    document.querySelectorAll('.nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        nav.style.display = 'none';
      })
    );
  }
});

