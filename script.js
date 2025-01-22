
const url = 'http://localhost:4500/test';

(async () => {

    const response = await fetch(url);
    const data = await response.json();

    console.log("Data from Server :",data);

})()