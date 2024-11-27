const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the homepage
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});
// Route for about page
app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname, "about.html"));
});

// Route for 404
app.use("/", (req, res) => {
	res.sendFile(path.join(__dirname, "404.html"));
});

// Port
const PORT = process.env.port || 3000;
app.listen(3000, () => {
	console.log(`Server is running http://localhost:${PORT}`);
});
