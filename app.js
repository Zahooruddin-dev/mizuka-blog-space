document.addEventListener('DOMContentLoaded', () => {
	const url = 'https://apis.scrimba.com/jsonplaceholder/posts';
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
              <hr>
          </div>
        `;
			}
			document.getElementById('container').innerHTML = html;
		})
		.catch((error) => {
			console.error('error fetching the data:', error);
			document.getElementById('container').innerHTML =
				'<h1>Please try again Failedto load content</h1>';
		});

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
		fetch(url, post)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
        document.getElementById('container').insertAdjacentHTML('afterbegin',`
          <div class='content-container'>
              <h1 class='title'>${data.title}</h1>
              <p class='content'>${data.body}</p>
              <hr>
          </div>
        `)
			});
	});
});