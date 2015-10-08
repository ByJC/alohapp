export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('root.alarm', {
        url: "/alarm/:id",
        views: {
            'content@root': {
                template: require("./alarmdetails/alarmdetails.html"),
                controller: "AlarmDetailsController as alarmDetailsCtrl"
            }
        }
    }).state('root.create', {
        url: "/alarm/create",
        views: {
            'content@root': {
                template: require("./alarmform/alarmform.html"),
                controller: "AlarmFormController as alarmFormCtrl"
            }
        }
    });
}
