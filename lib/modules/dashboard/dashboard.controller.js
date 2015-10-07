class DashboardController {

   constructor ($scope, $alarm, $state) {
       'ngInject';

       let vm = this;
       vm.addAlarm = addAlarm;
       vm.createNewAlarm = createNewAlarm;

       vm.alarms = $alarm.getAlarms();

       function createNewAlarm () {
           $state.go('root.alarm');
       }

       function addAlarm () {
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
       }
   }

}


export default DashboardController;
