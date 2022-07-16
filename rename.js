const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "./");
const args = process.argv.slice(2);
const oldExtension = args[0]
const newExtension = args[1]

fs.readdir(directoryPath, function (err, files) {
  if (err) console.log("Unable to scan directory: " + err);

  let filesRenamed = 0;
  files.forEach((file) => {
    if (path.parse(file).ext == "." + oldExtension) {
      filesRenamed++;
      fs.renameSync(
        directoryPath + file,
        directoryPath + path.parse(file).name + "." + newExtension,
        (err) => {
          if (err) throw err;
        }
      );
    }
  });

  console.log(filesRenamed + " files renamed.");
});
