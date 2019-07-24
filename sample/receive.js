app.get("/", function(req, res) {
  console.log(req, res);
  res.sendFile(path.join(__dirname, "./index.html"));
  res.setHeader("Access-Control-Allow-Origin", "*");
});

app.post("/form", (req, res) => {
  res.send("Form has been submitted");
  const name = req.body;
  console.log(name);
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
  fs.writeFile(
    `response${fileName}.txt`,
    `{ 
     ${name.course}
    }`,
    function(err) {
      if (err) throw err;
    }
  );
});
