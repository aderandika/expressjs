import express from "express";
const router = express.Router();

// route ejs 
router.use("/", (req, res) => {
    const data = {
        title: "Barang",
        // definisikan layout
        layout: "layout/main-layout",
        data: [
            {
                id: 100, 
                nama: "Baju"
            }, 
            {
                id: 200, 
                nama: "Celana"
            },
            {
                id: 300, 
                nama: "Sepatu"
            }
        ]
    }
    res.render("index", data);
});

router.use("*", (req, res) => {
    res.status(404).send("Not Found");
});

export default router;