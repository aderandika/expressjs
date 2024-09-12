import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Halo Randi');
})

app.get("/about", (req, res) => {
    res.send('About Page');
})

app.get("/contact", (req, res) => {
    res.send('Contact');
})

// Menampilkan jika halaman tidak di temukan
app.use("*", (req, res) => {
    res.status(404);
    res.send("Halaman tidak dapat ditemukan");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})