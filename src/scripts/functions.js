var fs = require('fs');
var colors = require('colors');

module.exports = {
  writeReadme: function (file, projectTitle) {
    fs.readFile(file, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      } else {
        console.log('- Read ' + file);
      }
      var result = data.replace(/PROJECT-NAME/g, projectTitle);

      fs.writeFile(file, result, 'utf8', function (err) {
        if (err) {
          return console.log(err);
        } else {
          console.log('- Updated ' + file);
          console.log('Project created!'.green);
        }
      });
    });
  },

  openFolder: function (path) {
    // var gui = require('nw.gui');
    // gui.Shell.showItemInFolder(path);
  },


  // Create WordPress post
  // WP Rest API: https://www.npmjs.com/package/wordpress-rest-api#creating-posts
  // WP Plugin: https://github.com/WP-API/Basic-Auth
  // Experimental. Doesn't work for custom post types?
  createPodloveEpisode: function (config, projectTitle) {

    var WP = require( 'wordpress-rest-api' );

    // You must authenticate to be able to POST (create) a post
    var wp = new WP(config);
    wp.posts().create({
      // "title" and "content" are the only required properties
      title: projectTitle,
      content: 'Your post content',
      // type: 'podcast',
      // Post will be created as a draft by default if a specific "status"
      // is not specified
      status: 'publish'
    }).then(function( response ) {
      // "response" will hold all properties of your newly-created post,
      // including the unique `id` the post was assigned on creation
      console.log( response.id );
    })
  }
};
