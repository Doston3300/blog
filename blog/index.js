const input__name = document.getElementById('input__name');
const input__lastname = document.getElementById('input__lastname');
const input__username = document.getElementById('input__username');
const input__pasword = document.getElementById('input__pasword');
const input__confirm = document.getElementById('input__confirm');
const register__btn = document.querySelector('.register__btn');
const massage = document.querySelector('#massage');
register__btn.addEventListener('click', function() {
    if (input__name.value === 'Doston') {
        massage.innerText = 'tog`ri';
    } else {
        massage.innerText = 'xato';

    }
})
register__btn.addEventListener('click', function() {
    if (input__lastname.value === 'Qudratov') {
        massage.innerText = 'tog`ri';
    } else {
        massage.innerText = 'xato';
    }
})
register__btn.addEventListener('click', function() {
    if (input__username.value === 'doston') {
        massage.innerText = 'tog`ri';
    } else {
        massage.innerText = 'xato';
    }
})
register__btn.addEventListener('click', function() {
    if (input__pasword.value === '05072000') {
        massage.innerText = 'tog`ri';
    } else {
        massage.innerText = 'xato';

    }
})
register__btn.addEventListener('click', function() {
        if (input__confirm.value === '05072000') {
            massage.innerText = 'tog`ri';
        } else {
            massage.innerText = 'xato';
        }
    })
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         data.forEach(user => {
    //             const bus__imgright = userbus__imgrightTemlate.content.cloneNode(true).children[0]
    //             const bus__texttwo = bus__imgright.querySelector("[bus__imgright]")

//         });
//         console.log(data);
//         const dataArray = Object.values(data);
//         console.log(dataArray);`

//         const newData = dataArray[4];
//         console.log(newData);

//         newData.map((key) => {
//             console.log(key);

//             const poster = document.createElement("name");
//             poster.src = key.avatar;
//             box.appendChild(poster)
//         })
//     }).
// catch((err) => {
//     console.log(console.error())
// })



// document.querySelector('#btn').addEventListener('click', function() {
//     ();
// })

// function myText() {
//     let massseg, text;
//     let errElement = document.getElementById('input');
//     message = document.getElementById('err ');
//     text = document.getElementById('text').value;


//     try {
//         if (text === "") {
//             errElement.classList.add('err')
//         }
//         if (text.length > 0) {
//             errElement.classList.remove('input__name');
//             errElement.classList.add('register__btn');
//             massseg.innerHTML = '';
//         }
//     } catch (e) {
//         massseg.innerHTML = 'Qiymat' + e;
//     }
// }