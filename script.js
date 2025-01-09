async function test() {
    try {
        console.log("hey2");
        const result = await fetch('https://google.com');
        console.log("hey3");
        console.log("Result :", result);
        return result;

    } catch (error) {
        console.log(error);
    }

}


test();
console.log("hey");

