const input__name = document.getElementById('input__name');
const input__pasword = document.getElementById('input__pasword');
const register__btn = document.getElementById('register__btn');
const massage = document.querySelector('#massage')

btn.addEventListener('click', function() {
    if (input__name.value === 'Doston') {
        messageChannel.innerText = "to'g'ri";
    } else {
        massage.innerText = 'xato';
    }

})
btn.addEventListener('click', function() {
    if (input__pasword.value === '05072000') {
        massage.innerText = 'tog`ri';
    } else {
        massage.innerText = 'xato';
    }
    console.log(xato)
})