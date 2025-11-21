document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('searchBtn');

  button.addEventListener('click', () => {
    fetch('superheroes.php')
      .then(response => response.text())
      .then(data => {
        alert(data);
      })
      .catch(error => {
        console.error('Error fetching superheroes:', error);
        alert('Something went wrong fetching the list.');
      });
  });
});
