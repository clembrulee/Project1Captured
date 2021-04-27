
// on form submit, prevent default form refreshing, append user comment onto page
const form = document.querySelector('form')
const button= document.querySelector('.submit')


function postDate(username){
	const n = new Date();
	const y = n.getFullYear();
	const m = n.getMonth() + 1;
	const d = n.getDate();
	const newDate = document.createElement("p");
	newDate.textContent = `${m} / ${d} / ${y} by ${username}`;
	return newDate;
}

button.addEventListener('click', function(event){
	event.preventDefault();
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('commentBox').value;

	const commentSection = document.querySelector('.commentSection');
	

	const newDate = postDate(username);
	console.log(postDate)
	const newComment = document.createElement('div');
	newComment.className = 'comment';
	newComment.innerHTML = `
				<div class="imgContainer">
					<img src="https://picsum.photos/200" alt="dummy image">
				</div>
				<div class="commentText">
					<p>${newDate.textContent}</p>
					<p>${message}</p>
				</div>`
				console.log(newDate);
	if (username === '' || email === '' || message === ''){
		alert('Please fill in all entries!')
	}else {
		commentSection.appendChild(newComment);
	}
	form.reset();
})