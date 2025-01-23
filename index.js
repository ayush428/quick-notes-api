const express = require('express');
const app = express();
const PORT = 8000;

let notes = [];

app.use(express.json());


app.post('/notes', (req, res) => {
    const note = req.body;
    notes.push(note);
    res.send({ message: 'Note added', notes });
});

app.get('/notes', (req, res) => {
    res.send(notes);
});


app.get('/', (req, res) => {
    res.send('This is notes app');
});


app.put('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newNote = req.body;
    notes[id] = newNote;
    res.send({ message: 'Note updated', notes });
});

app.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    notes.splice(id, 1);
    res.send({ message: 'Note deleted', notes });
});


app.listen(PORT, () => {
    console.log(`We are live on PORT ${PORT}`);
});
