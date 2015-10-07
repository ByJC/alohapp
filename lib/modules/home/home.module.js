import modConfig from './home.config';
import modController from './home.controller';

export default angular.module('alohapp.home', [])
    .config(modConfig)
    .controller('HomeController', modController)
    .name;
