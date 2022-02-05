import fetch from "node-fetch";

// fulfilled status by Promise Object

const pResolve = new Promise((resolve) => {
    setTimeout(() => {
        resolve('success');
    }, 2000);
});
pResolve.then((result) => {
    console.log(result);
});

// rejected status by Promise Object

const pReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('fail'));
    }, 2000);
});
pReject.catch((error) => {
    console.log(error);
});

// Promisify the asynchronous function.
function wait(text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    });
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.text())
.then((result) => wait(`${result} by Codeit`))
.then((result) => {
    console.log(result);
});

