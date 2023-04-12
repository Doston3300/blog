async function getData() {
    let res = await fetch("const url = const url = 'https://newsapi.org/v2/everything?q=Apple&apiKey=798668c97a224bafaa02be54a5bee74b'")
    let data = await res.json()
    console.log(data);
}
getData()

let inp = document.querySelector(".input");
let btn = document.querySelector("#button-addon2");

btn.addEventListener("click", () => {
    console.log(inp.value);
})
const options = {
    method: 'GET',
    params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    headers: {
        'x-api-key': ''
    },

};

// let url = 'https://api.newscatcherapi.com/v2/search?q=Business';
// fetch(url, options)
//     .then(response => response.json())
//     .then(data => {

//     })
//     .catch(err => console.error(err));