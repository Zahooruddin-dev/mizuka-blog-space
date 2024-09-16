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
			document.getElementById('container').innerHTML =
				'<p>Failed to load content. Please try again later.</p>';
		});

	document.querySelector('form').addEventListener('submit', (event) => {
		event.preventDefault(); 

		const title = document.getElementById('title-text').value;
		const body = document.getElementById('content-text').value;

		console.log('Title:', title);
		console.log('Body:', body);
	});
});

/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/