import 'ionic-sdk/release/js/ionic.bundle';
import 'expose?_!lodash';

import 'ionic-native-transitions';

// Our modules
import modConfigIonic       from './config/ionic.config';
import modConfigRouter      from './config/router.config';
import modConfigTransition  from './config/ionicNativeTransition.config';
import modRun               from './run';
import modHome              from './modules/home/home.module';
import modPost              from './modules/post/post.module';
import modMenu              from './modules/menu/menu.module';
import modDashboard         from './modules/dashboard/dashboard.module';
import modAlarm             from './modules/alarm/alarm.module';

// Our components
import cpLanguage           from './components/language/language.module';
import cpItems              from './components/items/items.module';

// Style entry point
import './scss/bootstrap';

// Create our prototype module
let mod = angular.module('alohapp', [
    'ionic',
    'ui.router',
    'ionic-native-transitions',
    cpLanguage,
    cpItems,
    modAlarm,
    modDashboard,
    modHome,
    modMenu,
    modPost
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// IONIC CONFIG
mod.config(modConfigIonic);
// IONIC TRANSITION CONFIG
mod.config(modConfigTransition);
// Run
mod.run(modRun);

export default mod = mod.name;
