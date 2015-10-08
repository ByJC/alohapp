class DashboardController {

   constructor ($scope, $alarm, $state) {
       'ngInject';

       let vm = this;

       vm.alarms = $alarm.getAlarms();
       
   }

}


export default DashboardController;
