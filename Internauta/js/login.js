const singinBtn = document.querySelector('.signin_button');
const singupBtn = document.querySelector('.signup_button');
const formBox = document.querySelector('.formBox');
const body = document.querySelector('body');

singupBtn.onclick = function () {
    formBox.classList.add('active');
    body.classList.add('active');
}

singinBtn.onclick = function () {
    formBox.classList.remove('active');
    body.classList.remove('active')
}

