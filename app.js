const url = 'https://apis.scrimba.com/jsonplaceholder/posts';
fetch(url, { method: 'GET' })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		const postArr = data.slice(0, 10);
		console.log(postArr);
		let html = '';
		for (const element of postArr) {
			html += `
<div class="wrapper">
        <div class='content-container'>
            <h1 id="title" class='title'>${element.title}</h1>
            <p class="content">${element.body}</p>
            <hr>
        </div>
       
`
    ;
		}
		document.getElementById('container').innerHTML = html;
	});
