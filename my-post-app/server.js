// import express from "express";
// import bodyParser from "body-parser";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import cors from "cors";
// import { v4 as uuidv4 } from "uuid";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = 5000; // Use the desired port here
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

// app.get("/posts/:id", (req, res) => {
//   fs.readFile(postsFile, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error reading posts file");
//     }
//     const posts = JSON.parse(data);
//     const post = posts.find((p) => p.id === req.params.id);
//     if (!post) {
//       return res.status(404).send("Post not found");
//     }
//     res.send(post);
//   });
// });

// app.post("/posts", (req, res) => {
//   const newPost = req.body;
//   const preview = newPost.details.substring(0, 100);
//   const postWithIdAndPreview = {
//     id: uuidv4(),
//     title: newPost.title,
//     details: newPost.details,
//     preview: preview,
//   };

//   fs.readFile(postsFile, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error reading posts file");
//     }

//     const posts = JSON.parse(data);
//     posts.push(postWithIdAndPreview);

//     fs.writeFile(postsFile, JSON.stringify(posts, null, 2), (err) => {
//       if (err) {
//         return res.status(500).send("Error writing to posts file");
//       }
//       res.status(201).send(postWithIdAndPreview);
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
import multer from "multer";
// import bcrypt from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const postsFile = path.join(__dirname, "posts.json");
const usersFile = path.join(__dirname, "users.json");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // Ensure the uploads directory is created
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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

app.post("/posts", upload.single("image"), (req, res) => {
  const { summary, details } = req.body;
  const imageUrl = req.file ? `uploads/${req.file.filename}` : null; // Correct URL format

  const postWithId = {
    id: uuidv4(),
    summary,
    details,
    imageUrl,
  };

  fs.readFile(postsFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading posts file");
    }

    const posts = JSON.parse(data);
    posts.push(postWithId);

    fs.writeFile(postsFile, JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error writing to posts file");
      }
      res.status(201).json(postWithId);
    });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  fs.readFile(usersFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading users file");
    }

    const users = JSON.parse(data);
    const user = users.find((user) => user.username === username);

    // You can use bcrypt to compare hashed passwords
    if (user) {
      // If you are using bcrypt to hash passwords, do the comparison like this:
      // bcrypt.compare(password, user.password, (err, result) => {
      //   if (result) {
      //     return res.json({ message: "Login successful" });
      //   }
      //   return res.status(401).json({ message: "Invalid credentials" });
      // });

      // For this example, we are using plain password comparison
      if (user.password === password) {
        return res.json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
