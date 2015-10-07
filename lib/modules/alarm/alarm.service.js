class AlarmService {

    constructor () {
        'ngInject';

        let vm = this;

        vm.getAlarms = getAlarms;
        vm.getAlarmById = getAlarmById;
        vm.setAlarm = setAlarm;

        vm.alarms = [{
            adress : '10 rue françois lanvin',
            city: 'Paris',
            zipCode: '75001',
            time: '07:30',
            wakeupTime: '900',
            preparationTime: '1800',
            transportMode : '',
            days: [],
            active: true
        }];

        function getAlarms () {
            return vm.alarms;
        }

        function getAlarmById () {

        }

        function setAlarm (alarm) {
            vm.alarms.push(alarm);
        }

        function removeAlarm (alarm) {

        }
    }

}

export default AlarmService;
