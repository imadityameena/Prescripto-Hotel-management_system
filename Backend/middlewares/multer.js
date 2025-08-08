// FILE: backend/middleware/multer.js

import multer from "multer";

// (39.2) Implementing Multer middleware for file storage and route creation ✅
// This sets up multer to temporarily store uploaded files on the server's disk.
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

// The configured multer instance is then exported to be used in the route definitions.
const upload = multer({ storage: storage })

export default upload