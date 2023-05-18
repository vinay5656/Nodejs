const {writeFileSync} = require('fs');
// creating big test file

const path = "C:/Users/chauh/Desktop/Nodejs/streamsInNode/bigText.txt";
for(let i =0;i<100000;i++){
    writeFileSync(path,` Hello Vinay ${i}\n`, {flag: 'a'});
}