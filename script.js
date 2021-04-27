// select the form and buttons to attach eventlistener
const form = document.querySelector('form')
const button= document.querySelector('.submit')

// create a function outside of button click event for today's date to be used when user submits form with username to return date of comment post
function postDate(username){
	const n = new Date();
	const y = n.getFullYear();
	const m = n.getMonth() + 1;
	const d = n.getDate();
	const newDate = document.createElement("p");
	newDate.textContent = `${m} / ${d} / ${y} by ${username}`;
	return newDate.textContent;
}

// add eventlistner to button click event 
button.addEventListener('click', function(event){
	// on form submit, prevent default form refreshing, 
	event.preventDefault();
	// obtain the values of user input from form
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('commentBox').value;

	// select the commentsection to appendChild
	const commentSection = document.querySelector('.commentSection');
	
	// call function for posting date
	const newDate = postDate(username);

	// create div containing the img and text of the content
	const newComment = document.createElement('div');
	newComment.className = 'comment';
	newComment.innerHTML = `
				<div class="imgContainer">
					<img src="https://picsum.photos/200" alt="dummy image">
				</div>
				<div class="commentText">
					<p>${newDate}</p>
					<p>${message}</p>
				</div>`

	// append user comment onto page if all fields on the form are filled in
	if (username === '' || email === '' || message === ''){
		alert('Please fill in all entries!')
	}else {
		commentSection.appendChild(newComment);
	}
	// refresh the form
	form.reset();
})