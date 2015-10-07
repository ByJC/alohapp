export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('root.dashboard', {
        url: "/dashboard",
        views: {
            'content@root': {
                template: require("./dashboard.html"),
                controller: "DashboardController as dashboardCtrl"
            }
        }
    });
}
