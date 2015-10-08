class AlarmFormController {

    constructor ($alarm, $state) {
        'ngInject';

        let vm = this;

        vm.createAlarm = createAlarm;
        vm.alarm = {
            time : {
                hours:4,
                minutes: 37
            }
        };

        function createAlarm () {
            $alarm.setAlarm(vm.alarm);
            $state.go('root.dashboard');
        }
    }

}

export default AlarmFormController;
