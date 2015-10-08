class AlarmFormController {

    constructor ($alarm, $state) {
        'ngInject';

        let vm = this;

        vm.createAlarm = createAlarm;

        function createAlarm () {
            $alarm.setAlarm({
                adress : 'test adress',
                city: 'City adress',
                zipCode: '75001',
                time: '09:00',
                wakeupTime: '900',
                preparationTime: '1800',
                transportMode : '',
                days: [],
                active: true
            });

            $state.go('root.dashboard');
        }
    }

}

export default AlarmFormController;
