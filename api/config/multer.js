const multer = require("require");

const storage = multer.diskStorage({
  destination: (req, res, callback) => callback(null, __dirname + "/../public/images"),
  filename: (req, res, callback) => callback(null, file.filename + '-' + Date.now() + ".jpg"),
});

const upload = multer({ storage });

module.exports = upload;