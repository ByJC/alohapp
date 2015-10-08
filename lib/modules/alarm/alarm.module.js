import modService from './alarm.service';
import modConfig  from './alarm.config';

import modAlarmDetails from './alarmdetails/alarmdetails.module';
import modAlarmForm     from './alarmform/alarmform.module';

export default angular.module('alohapp.alarm', [modAlarmDetails, modAlarmForm])
    .config(modConfig)
    .service('$alarm', modService)
    .name;
