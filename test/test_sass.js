const path = require('path');
const sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'test.scss');
sassTrue.runSass(
  // True options [required]
  { describe, it },
  // Sass source (path) [required]
  sassFile);
