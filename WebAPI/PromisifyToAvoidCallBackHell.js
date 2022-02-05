import fs from "fs";
// CallBack Hell and Promise

/*
fs.readFile('file1.txt', 'utf8', (error1, data1) => {
    if (error1) {
        console.log(error1);
    } else {
        console.log(data1);
        fs.readFile('file2.txt', 'utf8', (error2, data2) => {
            if (error2) {
                console.log(error2);
            } else {
                console.log(data2);
                fs.readFile('file3.txt', 'utf8', (error3, data3) => {
                    if (error3) {
                        console.log(error3);
                    } else {
                        console.log(data3);
                    }
                });
            }
        });
    }
});*/
/** CallBack Hell **/

function readFile_promisified(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, data) => {
            if (error) {
                reject(error); // 에러 발생 시 -> rejected
            } else {
                resolve(data); // 파일 내용 읽기 완료 -> fulfilled
            }
        });
    });
} /** Promisify readFile function **/

readFile_promisified('file1.txt')
.then((data) => {
    console.log(data);
    return readFile_promisified('file2.txt');
})
.then((data) => {
    console.log(data);
    return readFile_promisified('file3.txt');
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});