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
    });
}
