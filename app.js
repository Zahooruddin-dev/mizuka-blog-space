document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://apis.scrimba.com/jsonplaceholder/posts';

  fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const postArr = data.slice(0, 3); // Adjust as needed
      let html = '';
      for (const element of postArr) {
        html += `
          <div class='content-container'>
              <h1 class='title'>${element.title}</h1>
              <p class='content'>${element.body}</p>
              <hr>
          </div>
        `;
      }

      document.getElementById('container').innerHTML = html;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      document.getElementById('container').innerHTML = '<p>Failed to load content. Please try again later.</p>';
    });

  // Handle form submission
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const title = document.getElementById('title-text').value;
    const body = document.getElementById('content-text').value;

    console.log('Title:', title);
    console.log('Body:', body);

    // Here you can handle the form data (e.g., send it to an API or display it)
  });
});
