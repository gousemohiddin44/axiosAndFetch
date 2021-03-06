const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.post("/create",(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title,
        content
    });
    newNote.save();
});

router.get("/notes",(req,res)=>{
    Note.find().then(foundNotes=> res.json(foundNotes))
})

module.exports = router;