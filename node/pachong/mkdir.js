const fs = require('fs');
function mkdir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
module.exports = mkdir;
