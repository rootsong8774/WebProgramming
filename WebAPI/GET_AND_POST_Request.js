import fetch from "node-fetch";

//GET Request
/*fetch('https://learn.codeit.kr/api/members')
    .then((response) => response.text())
    .then(result => {console.log(result);});*/

fetch('https://learn.codeit.kr/api/members/70')
.then((response) => response.text())
.then(result => {console.log(result);});

//POST Request

const newMember = {
    name: 'Jerry',
    email: 'jerry@codeitmall.kr',
    department: 'engineering',
}

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember),
})
.then((response) => response.text())
.then(result => {console.log(result);});