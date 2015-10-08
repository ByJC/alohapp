export default function () {
    'ngInject';

    return {
        restrict: 'EA',
        template:require("./timepicker.html"),
        scope: {
            hours: "=",
            minutes: "="
        },
        controller: 'TimePickerController as tpCtrl',
        replace: true
    }
}
