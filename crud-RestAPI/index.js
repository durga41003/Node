import express from 'express' //fro ESM ;const express =require('express'); for CJS
const app=express();
const port =5000;
let data = [
  { name: "Arjun Tripathi", course: "MCA", roll_no: "14", id: 1 },
  { name: "Rahul Durgapal", course: "MCA", roll_no: "36", id: 2 },
  { name: "Aman Yadav", course: "MCA", roll_no: "08", id: 3 },
];
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json(data);
});

app.post("/", (req, res) => {
  let items = data.map((item) => item.id);

  let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1;

  let newItem = {
    id: newId,
    name: req.body.name,
    course: req.body.course,
    roll_no: req.body.roll_no,
  };

  data.push(newItem);

  res.status(201).json({
    message: "successfully created",
  });
});

app.put("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let updateData = {
      id: found.id,
      name: req.body.name,
      course: req.body.course,
      roll_no: req.body.roll_no,
    };

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updateData);

    res.status(201).json({ message: "data updated" });
  } else {
    res.status(404).json({
      message: "unable to insert data because data inserted not matched",
    });
  }
});

app.patch("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    if (req.body.name) {
      found.name = req.body.name;
    }
    if (req.body.course) {
      found.course = req.body.course;
    }
    if (req.body.roll_no) {
      found.roll_no = req.body.roll_no;
    }
    res.status(201).json({ message: "data updated" });
  } else {
    res.status(404).json({
      message: "unable to insert data because data inserted not matched",
    });
  }
});

app.delete("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port,() =>{
    console.log(`Server running at localhost , port: ${port}`);
}
);