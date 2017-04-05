import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './modules/home';

// BOOTSTRAP CSS ----------------------------

import './stylesheets/bootstrap.min.css';
import './stylesheets/bootstrap-theme.min.css';

// MAIN APP CSS ----------------------------

import './stylesheets/app.css';


// VENDOR JS SCRIPTS ----------------------------

import './vendor/ui-bootstrap-tpls-2.2.0.min.js';
import './vendor/angular-contentful.min.js';

angular.module('app', [uirouter, home, 'contentful'])
  .config(function(contentfulProvider) {
    contentfulProvider.setOptions({
      space: 'jvijs8gputds',
      accessToken: '0cbeef691191860f77f0f682fa50ef9a9aa76f008a7349b6fb7a59a4914ae653'
    });
  })
  .config(routing);
