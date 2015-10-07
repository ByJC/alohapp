import modConfig from './dashboard.config';
import modController from './dashboard.controller';

export default angular.module('alohapp.dashboard', [])
    .config(modConfig)
    .controller('DashboardController', modController)
    .name;
