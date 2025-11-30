let express = require("express");
let path = require("path");

let app = express();
let port = 8000;

// Serve static files (css, js, images) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Fix: Changed "x" to "/" so it loads on the homepage
app.get("/", function (req, res) {
    // Fix: Removed the comma inside the string
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, function () {
    console.log("Server on port " + port);
});