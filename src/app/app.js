import angular from 'angular';
import uirouter from 'angular-ui-router';

import AppComponent from './app.component';

import HomeComponent from './modules/home/home';
import NavComponent from './components/navigation/nav.js';

// BOOTSTRAP CSS ----------------------------

import './stylesheets/bootstrap.min.css';
import './stylesheets/bootstrap-theme.min.css';

// MAIN APP CSS ----------------------------

import './stylesheets/app.css';


// VENDOR JS SCRIPTS ----------------------------

import './vendor/ui-bootstrap-tpls-2.2.0.min.js';
import './vendor/angular-contentful.min.js';

angular
  .module('app', [
    uirouter,
    HomeComponent.name,
    NavComponent.name,
    'contentful'
  ])
  .config(($urlRouterProvider, $locationProvider, $stateProvider, contentfulProvider) => {
    "ngInject";

    $locationProvider.html5Mode(false);

    contentfulProvider.setOptions({
      space: 'jvijs8gputds',
      accessToken: '0cbeef691191860f77f0f682fa50ef9a9aa76f008a7349b6fb7a59a4914ae653'
    });

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        template: '<app></app>'
      })
      .state('app.home', {
        url: '/home',
        template: '<home></home>'
      });
    $urlRouterProvider.otherwise('/app/home');
  })
  .component('app', AppComponent);
