const url = 'https://apis.scrimba.com/jsonplaceholder/posts';
fetch(url, { method: 'GET' })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		const postArr = data.slice(0, 10);
		console.log(postArr);
		let html = '';
		for (const element of postArr) {
			html += `  <h1 id="title">${element.title}</h1>
        <h2 id="content">${element.body}</h2>
        <hr>`;
		}
		document.getElementById('container').innerHTML = html;
	});
