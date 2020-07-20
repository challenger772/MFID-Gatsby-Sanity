module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"once":false,"threshold":1},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
