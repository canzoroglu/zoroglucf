const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello, man");
});

app.get("/demo", (req, res) => {
	res.set("X-headercan", "test");
	res.status(418);
	res.send("Status 418");
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
