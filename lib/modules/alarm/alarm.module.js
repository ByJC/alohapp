import modService from './alarm.service';
import modConfig  from './alarm.config';

import modAlarmDetails from './alarmdetails/alarmdetails.module';

export default angular.module('alohapp.alarm', [modAlarmDetails])
    .config(modConfig)
    .service('$alarm', modService)
    .name;
