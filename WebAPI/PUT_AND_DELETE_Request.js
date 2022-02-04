import fetch from "node-fetch";

//PUT Request
const member = {
    name: 'Jerry',
    email: 'jerry@codeitmall.kr',
    department: 'marketing',
}

fetch('https://learn.codeit.kr/api/members/75', {
    method: 'PUT',
    body: JSON.stringify(member),
})
.then((response) => response.text())
.then(result => {console.log(result);});

//DELETE Request

fetch('https://learn.codeit.kr/api/members/75', {
    method: 'DELETE',
})
.then((response) => response.text())
.then(result => {console.log(result);});




