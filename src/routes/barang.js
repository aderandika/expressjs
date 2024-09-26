import express from "express";
const barangRouter = express.Router();
import multer from "multer";
// Direktori untuk menyimpan multer 
let storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, "./public/img/");
     },
     filename: function (req, file, cb) { 
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."), 
            file.originalname.length
        );
        cb(null, Date.now() + ext);
      },
})

const upload = multer({
    storage:storage
})

// Menampilkan data setelah di submit
barangRouter
    .route("/")
    .get((req, res) => {
        res.send("Ini adalah metode get semua barang");
    })
    .post(upload.single("attachment"), (req, res) => {
        let file = req.file;
        let body = req.body;
        console.log(file);
        console.log(body);
        res.send("Ini adalah metode post semua barang");
    });

    // Render barang untuk files di folder barang/index.ejs
    barangRouter.route("/insert").get((req, res) => {
        const data = {
            title: "Barang", 
            layout: "layout/main-layout",
        };
        res.render("barang/index", data)
    })

barangRouter
    .route("/:id")
    .get((req, res) => {
        res.send("Ini adalah metode get barang dengan id = " + req.params.id);
    })
    .put((req, res) => {
        res.send("Ini adalah metode put barang dengan id = " + req.params.id);
    })
    .delete((req, res) => {
        res.send("Ini adalah metode delete barang dengan id = " + req.params.id);
    })

export default barangRouter;