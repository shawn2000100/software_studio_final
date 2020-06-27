// import axios from 'axios';

export default var sendActivityButton = document.querySelector("#sendActivity");
console.log(sendActivityButton)

export default function sendActivityButton.addEventListener("click", function() {
    console.log("Hello From act.js")

    let url = 'http://localhost:3000/api/todos'
    console.log(`Making POST request to: ${url}`);

    return axios.post(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
})

// function sendActivity() {
//     // var xhr = new XMLHttpRequest();
//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === 4) {
//     //         alert(xhr.response);
//     //     }
//     // }
//     // xhr.open('get', 'http://localhost:3000/api/todos', true);
//     // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//     // xhr.send();
// }