const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

// setup static folder 
/* app.use(express.static(path.join(__dirname, 'public'))) */

let posts = [
    {id: 1, title: "Post One"},
    {id: 2, title: "Post Two"},
    {id: 3, title: "Post Three"},
];
// get all posts 
app.get("/api/posts", (req, res) => {
    res.json(posts);
})

// get single posts 
app.get("/api/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
})


/*

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})    
    
*/

app.listen(port, () => console.log(`Server is running ${port}`));