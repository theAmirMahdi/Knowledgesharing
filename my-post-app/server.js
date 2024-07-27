// import express from "express";
// import bodyParser from "body-parser";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import cors from "cors";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = 5000;
// const postsFile = path.join(__dirname, "posts.json");

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/posts", (req, res) => {
//   fs.readFile(postsFile, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error reading posts file");
//     }
//     res.send(data);
//   });
// });

// app.post("/posts", (req, res) => {
//   const newPost = req.body;

//   fs.readFile(postsFile, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error reading posts file");
//     }

//     const posts = JSON.parse(data);
//     posts.push(newPost);

//     fs.writeFile(postsFile, JSON.stringify(posts, null, 2), (err) => {
//       if (err) {
//         return res.status(500).send("Error writing to posts file");
//       }
//       res.status(201).send(newPost);
//     });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000; // Use the desired port here
const postsFile = path.join(__dirname, "posts.json");

app.use(cors());
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  fs.readFile(postsFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading posts file");
    }
    res.send(data);
  });
});

app.get("/posts/:id", (req, res) => {
  fs.readFile(postsFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading posts file");
    }
    const posts = JSON.parse(data);
    const post = posts.find((p) => p.id === req.params.id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.send(post);
  });
});

app.post("/posts", (req, res) => {
  const newPost = req.body;
  const preview = newPost.details.substring(0, 100);
  const postWithIdAndPreview = {
    id: uuidv4(),
    title: newPost.title,
    details: newPost.details,
    preview: preview,
  };

  fs.readFile(postsFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading posts file");
    }

    const posts = JSON.parse(data);
    posts.push(postWithIdAndPreview);

    fs.writeFile(postsFile, JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error writing to posts file");
      }
      res.status(201).send(postWithIdAndPreview);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
