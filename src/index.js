import express from "express";
const app = express();
const port = 3000;
// Route
import router from "./routes/index.js";
// Layouts
import expressEjsLayouts from "express-ejs-layouts";
// path 
import path from "path";
import url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Body parser 
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "views"));
// Buat render view
app.set("view engine", "ejs");
// Definisikan layouts
app.use(expressEjsLayouts);
// static file untuk inisialisasi root public
app.use(express.static(path.join(__dirname, "../public")));

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})