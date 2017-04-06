import './scss/nav.scss';
import template from './primary-nav-component.html';
import controller from './nav.controller.js';

let navComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'nav'
};

export default navComponent;
