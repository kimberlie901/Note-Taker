/** Acceptance Criteria
 * GIVEN a note-taking application
 * WHEN I open the Note Taker
 * THEN I am presented with a landing page with a link to a notes page
 * WHEN I click on the link to the notes page
 * THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note's text in the right-hand column
 * WHEN I enter a new note title and the note's text 
 * THEN a Save icon appears in the navigation at the top of the page 
 * WHEN I click on the Save icon 
 * THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
 * WHEN I click on an existing note in the list in the left-hand column
 * THEN that note appears in the right-hand column
 * WHEN I click on the Write icon in the navigation at the top of the page
 * THEN I am presented with empty fields to enter a new note title and the note's text in the right-hand column
 */

//Dependencies
const express =  require("express");
const path = require("path");
const fs = require("fs");
const routesAPI = require("./Routes/routesAPI");
const routesHTMl = require("./Routes/routesHTML");

//Set up Express app
const app = express();
const PORT = process.env.PORT || 3001;

//Set up Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

//Setting routes for APIs
app.use("/api", routesAPI);
app.use("/", routesHTMl);

//Notes get saved and joins it in the db.json
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"));
})

// Extra Credit: Delete Notes

//Starts server to begin listening 
app.listen(PORT, () => {
    console.log(`Server listening on PORT at http://localhost:${PORT}`);
});
