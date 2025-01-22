const express = require("express");

const app = express();


app.use(express.json());


app.get("/test", (request, res) => {
    console.log("Check Request");

    const data = {
        success: true,
        message: "Server Running Successfully on port 4500",
    };
    return res.status(200).json(data);

});



app.post("/post", (req, res) => {

    const body = req.body;
    console.log("Body Comming From Client :",body);
    return res.json(body);

})

app.listen(4500, () => {
    console.log("Server Running On Port ", 4500);

})

console.log(history.length);
