import './scss/home.scss';
import angular from 'angular';
import HomeComponent from './home.component';

let homeModule = angular.module('home', ['contentful'])
  .component('home', HomeComponent);

export default homeModule;
