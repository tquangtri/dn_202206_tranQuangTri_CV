
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("", (req, res) => {
//     res.sendFile('view/index.html', {root: __dirname })
// });
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log('App run at port ${PORT}');
})