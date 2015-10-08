class TimePickerController {

    constructor($scope) {
        'ngInject';

        let vm = this;

        vm.increaseHours = increaseHours;
        vm.decreaseHours = decreaseHours;
        vm.increaseMinutes = increaseMinutes;
        vm.decreaseMinutes = decreaseMinutes;
        vm.displayHours = displayHours;
        vm.displayMinutes = displayMinutes;
        vm.switchPeriod = switchPeriod;

        vm.period = "AM";

        function increaseHours () {

            if ($scope.hours < 23) {
                $scope.hours = ++$scope.hours;
            }
            else {
                $scope.hours = 0;
            }
        }

        function decreaseHours() {
            $scope.hours = $scope.hours <= 0 ? 23 : --$scope.hours;
        }

        function increaseMinutes () {
            if ($scope.minutes >= 59) {
                $scope.minutes = 0;
            }
            else {
                $scope.minutes++;
            }
        }

        function decreaseMinutes () {
            if ($scope.minutes <= 0) {
                $scope.minutes = 59;
            }
            else {
                $scope.minutes = --$scope.minutes;
            }
        }

        function displayHours () {

            let hoursToDisplay = $scope.hours;

            if ($scope.hours > 12) {
                hoursToDisplay = $scope.hours - 12;
            }
            if (hoursToDisplay === 0) {
                hoursToDisplay = 12;
            }
            else {
                if (hoursToDisplay <= 9) {
                    hoursToDisplay = "0" + hoursToDisplay;
                }
            }

            return hoursToDisplay;
        }

        function displayMinutes () {
            return $scope.minutes <= 9 ? "0" + $scope.minutes : $scope.minutes;
        }

        function switchPeriod () {
            $scope.hours = $scope.hours >= 12 ? $scope.hours - 12 : $scope.hours + 12;
        }
    }
}

export default TimePickerController;
