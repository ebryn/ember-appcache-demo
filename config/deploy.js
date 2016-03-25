/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here

    'html-manifest': {
      filename: 'manifest.appcache',
      // prependPath: 'https://mycdn.com/',
      excludePaths: [
        'index.html',
        'images/bio-alex-blom.jpeg',
        'images/bio-bear-douglas.jpg',
        'images/bio-brenna-obrien.jpg',
        'images/bio-brigitte-warner.jpg',
        'images/bio-chad-hietala.jpg',
        'images/bio-charles-lowell.jpg',
        'images/bio-chris-ball.jpeg',
        'images/bio-chris-lopresto.jpg',
        'images/bio-estelle-deblois.jpg',
        'images/bio-felix-rieseberg.png',
        'images/bio-godfrey-chan.png',
        'images/bio-igor-terzic.jpg',
        'images/bio-ivan-vanderbyl.jpg',
        'images/bio-jade-applegate.jpg',
        'images/bio-james-kyle.jpg',
        'images/bio-john-kleinschmidt.jpg',
        'images/bio-ju-liu.jpg',
        'images/bio-katie-gengler.jpg',
        'images/bio-kelly-senna.png',
        'images/bio-lauren-tan.jpg',
        'images/bio-leah-silber.jpg',
        'images/bio-lisa-gringl.png',
        'images/bio-liz-baillie.jpg',
        'images/bio-matt-beale.png',
        'images/bio-matt-mckenna.png',
        'images/bio-mike-pack.jpg',
        'images/bio-nate-bibler.jpeg',
        'images/bio-oren-teich.jpg',
        'images/bio-ray-tiley.jpg',
        'images/bio-stef-penner.jpg',
        'images/bio-toran-billups.jpeg',
        'images/bio-vaidehi-joshi.png',
        'images/bio-xavier-cambar.jpeg',
        'images/bio-yehuda-katz.jpg'
      ],
      // includePaths: ['/mobile/'],
      network: ['*'],
      manifestRoot: function() {
        return '';
      }
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
