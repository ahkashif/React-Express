const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(express.urlencoded());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

/**
 * This JSON Array served the get call
 */
const courses = [
  {
    id: 0,
    name: "Choose Course",
    description: "",
    versions: 0
  },
  {
    id: 1,
    name: "react",
    description: "This is react, It is a JavaScript Library",
    versions: 2
  },
  {
    id: 2,
    name: "Angular",
    description: "This is Angular, It is a JavaScript Framework",
    versions: 8
  },
  {
    id: 3,
    name: "Node Js",
    description: "This is Node JS, It is a JavaScript RunTime Environment",
    versions: 11
  },
  {
    id: 4,
    name: "Vue Js",
    description: "This is Vue JS, It is a JavaScript Framework",
    versions: 3
  },
  {
    id: 5,
    name: "Express Js",
    description: "This is Express JS, It is a JavaScript Library",
    versions: 4
  },
  {
    id: 6,
    name: "JQuery",
    description: "This is JQuery, It is a JavaScript Library",
    versions: 3
  }
];

/**
 *This Post call get the data from the client and stores the data in a JSON file.
 */

app.post("/upload", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const selectedOptions = req.body.clientPostArray_1;
  const inputsValues = req.body.clientPostArray_2;
  console.log(inputsValues);
  /*
   * This map function return an array which is assigned to fileContents and again used in fs.writeFile().
   */
  let fileContents = selectedOptions.map((n, index) => {
    let count = `inputsValues.Input_${index + 1}`;
    console.log(count);
    return {
      name: n.name,
      description: n.description,
      inputValues: eval(count)
    };
  });

  /*
   *This code calculates the filename
   */
  var date = new Date();
  var fileName =
    date.getDate() +
    "" +
    (date.getMonth() + 1) +
    "" +
    date.getFullYear() +
    "" +
    date.getHours() +
    "" +
    date.getMinutes() +
    "" +
    date.getSeconds();

  /*
   * Here the contents are written to a file in JSON format.
   */
  fs.writeFile(
    `response${fileName}.json`,

    JSON.stringify(fileContents, null, 4),

    function(err) {
      if (err) throw err;
    }
  );
});

/**
 * This GET Call serves the a JSON Array (Line 14) to the client which is populated in the dropDown List.
 */
app.get("/api/course", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(courses);
});

/**
 * This server is hosted on port 5000
 */
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
