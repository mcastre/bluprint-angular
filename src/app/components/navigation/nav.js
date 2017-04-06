import angular from 'angular';
import navComponent from './nav.component.js';

let navModule = angular.module('navigation', [])
  .component('navigation', navComponent);


export default navModule;
