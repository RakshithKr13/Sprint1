const unameEle = document.getElementById('uname');
const passwordEle = document.getElementById('password');
const submitEle = document.getElementById('submit');

submitEle.addEventListener('click', (e) => {
e.preventDefault()
const name = unameEle.value
const pass = passwordEle.value

fetch('/api', {method : 'POST', body: JSON.stringify({
name, pass
})})

})
<!DOCTYPE html>
<html>
<body>

<h2>Background Image</h2>

<p>A background image for a p element:</p>

<p style="background-image: url('C:\Users\dell\Desktop\Class fall-22\SOFTWARE ENGINEERING\main project sprint 1\UI\LOGIN\image');">

</p>

</body>
</html>
