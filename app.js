const postArray = [];
const url = 'https://apis.scrimba.com/jsonplaceholder/posts';

// Fetch initial posts
fetch(url, { method: 'GET' })
	.then((res) => res.json())
	.then((data) => {
		const postArr = data.slice(0, 3); // Adjust as needed
		let html = '';
		for (const element of postArr) {
			html += `
        <div class='content-container'>
            <h1 class='title'>${element.title}</h1>
            <p class='content'>${element.body}</p>
        </div>
      `;
		}
		document.getElementById('container').innerHTML = html;
	})
	.catch((error) => {
		console.error('Error fetching the data:', error);
		document.getElementById('container').innerHTML =
			'<h1>Please try again. Failed to load content.</h1>';
	});

// Handle form submission for creating new posts
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const postTitle = document.getElementById('title-text').value;
	const postBody = document.getElementById('content-text').value;
	const dataObject = {
		title: postTitle,
		body: postBody,
	};
	console.log(dataObject);

	const post = {
		method: 'POST',
		body: JSON.stringify(dataObject),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	// Post new blog entry
	fetch(url, post)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			// Insert the new post at the top of the container
			document.getElementById('container').insertAdjacentHTML(
				'afterbegin',
				`
        <div class='content-container'>
            <h1 class='title'>${data.title}</h1>
            <p class='content'>${data.body}</p>
        </div>
      `
			);
			// Optionally, clear the form fields
			document.getElementById('title-text').value = '';
			document.getElementById('content-text').value = '';
		})
		.catch((error) => {
			console.error('Error posting data:', error);
		});
});
