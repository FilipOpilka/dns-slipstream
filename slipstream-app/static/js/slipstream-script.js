document.addEventListener('DOMContentLoaded', (event) => {
  alert('Hello World');

  const napis = document.getElementById('napis');
  napis.addEventListener('click', () => {
    alert('Clicked');
  });
});
