console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted seccesfully!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const picture = document.querySelector('img')

const picevent = event => {
	event.preventDefault()
    alert('Youre cuter than this duck!')
}

picture.addEventListener('mouseover', picevent)
