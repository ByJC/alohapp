import timepickerDirective from './timepicker.directive';
import timepickerController  from './timepicker.controller';

require('./timepicker.scss');

export default angular.module('alohapp.timepicker', [])
    .controller('TimePickerController', timepickerController)
    .directive('alTimePicker', timepickerDirective)
    .name;
