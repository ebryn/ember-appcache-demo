/* jshint node: true */

var AWS = require('aws-sdk');
var _ = require('lodash');

module.exports = function(deployTarget) {
  var credentials = AWS.config.keys.credentials();
  if (!credentials.secretAccessKey) {
    throw new Error("Unable to find AWS credentials. ");
  }

  var s3CommonOptions = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    region: 'us-east-1',
    bucket: 'appcache-demo.eaf4.com'
  };

  var ENV = {
    build: {},
    plugins: ['appshell', 'build', 'display-revisions', 'manifest', 'revision-data', 's3', 's3-index', 's3-index:s3-index-manifest', 's3-index:s3-index-appshell'],

    s3: _.defaults({
      filePattern: '**/*.{js,css,png,gif,ico,jpg,jpeg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,ttc,csv}'
    }, s3CommonOptions),

    's3-index': _.defaults({
      allowOverwrite: true
    }, s3CommonOptions),

    's3-index-manifest': _.defaults({
      filePattern: 'manifest.appcache',
      allowOverwrite: true
    }, s3CommonOptions),

    's3-index-appshell': _.defaults({
      filePattern: 'appshell.html',
      allowOverwrite: true
    }, s3CommonOptions),

    appshell: {
      excludePattern: '{robots.txt,crossdomain.xml}',
      externalDependencies: [
        // Google fonts are a little slippery, you need to keep
        // hitting the CSS endpoint with different user agents to try
        // to flush out all the variations.
        'http://fonts.googleapis.com/css?family=Poppins:400,700',
        'http://fonts.gstatic.com/s/poppins/v1/57TQ-anwthzkETEIO4jESAzyDMXhdD8sAj6OAJTFsBI.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/57TQ-anwthzkETEIO4jESBsxEYwM7FgeyaSgU71cLG0.woff',
        'http://fonts.gstatic.com/s/poppins/v1/57TQ-anwthzkETEIO4jESC3USBnSvpkopQaUR-2r7iU.ttf',
        'http://fonts.gstatic.com/s/poppins/v1/57TQ-anwthzkETEIO4jESPk_vArhqVIZ0nv9q090hN8.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/Aul8cxPpbm96Ali7smyVfCEAvth_LlrfE80CYdSH47w.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/F4YWuALHubF63LLQPw0rMfY6323mHUZFJMgTvxaG2iE.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/HLBysyo0MQBO_7E-DWLwzg.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/HUuNgGR31mqIHE6zs0BlBgLUuEpTyoUstqEm5AMlJo4.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/SFusu2OSFiUt40t5QNWvnA.woff',
        'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf',
        'http://fonts.gstatic.com/s/poppins/v1/aDjpMND83pDErGXlVEr-SSEAvth_LlrfE80CYdSH47w.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/gG8m82oGcrBJF727xHU04fY6323mHUZFJMgTvxaG2iE.woff2',
        'http://fonts.gstatic.com/s/poppins/v1/ePBp1XdWMQqYWkm0HYfk2gLUuEpTyoUstqEm5AMlJo4.woff',
        'http://fonts.gstatic.com/s/poppins/v1/57TQ-anwthzkETEIO4jESL3hpw3pgy2gAi-Ip7WPMi0.woff'
      ],
      prefixDomains: {}
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
