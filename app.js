document.addEventListener('DOMContentLoaded', () => {
  const form   = document.getElementById('searchForm');
  const input  = document.getElementById('search');
  const result = document.getElementById('result');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const query = input.value.trim();
    let url = 'superheroes.php';

    if (query !== '') {
      url += '?query=' + encodeURIComponent(query);
    }

    result.innerHTML = '<p>Loading…</p>';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        result.innerHTML = '<p>Something went wrong. Please try again.</p>';
      });
  });
});
