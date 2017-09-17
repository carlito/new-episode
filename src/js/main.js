
var ncp = require('ncp').ncp;

var c = {
  defaults:  require('../config/defaults.js'),
  wordpress: require('../config/wordpress.js'),
};

var f = require('./functions.js');

var projectTitle = process.argv[2];


ncp.limit = 16;

// Copy template folder
ncp(c.defaults.source, c.defaults.destination + projectTitle, function (err) {
  if (err) {
    return console.error(err);
  } else {
    console.log('- Project template copied.');
    f.writeReadme(c.defaults.destination + projectTitle + '/' + c.defaults.readmeFileName, projectTitle);
    // f.createPodloveEpisode(c.wordpress, projectTitle);
    // f.openFolder(c.destination)
  }
});
