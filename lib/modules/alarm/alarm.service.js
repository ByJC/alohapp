class AlarmService {

    constructor () {
        'ngInject';

        let vm = this;

        vm.getAlarms = getAlarms;
        vm.getAlarmById = getAlarmById;
        vm.setAlarm = setAlarm;

        vm.alarms = [{
            adress : '10 rue françois lanvin',
            city: 'Paris',
            zipCode: '75001',
            time: {
                hours: 7,
                minutes: 30
            },
            wakeupTime: '900',
            preparationTime: '1800',
            transportMode : '',
            days: [],
            active: true,
            type : 'onetime',
            extra : { message : 'json containing app-specific information to be posted when alarm triggers' },
            message : 'Alarm has expired!'
        }];

        function getAlarms () {
            return vm.alarms;
        }

        function getAlarmById () {

        }

        function setAlarm (alarm) {
            alarm.type = 'onetime';
            alarm.extra = { message : 'json containing app-specific information to be posted when alarm triggers' };
            alarm.message = 'Alarm has expired!';
            vm.alarms.push(alarm);
            window.wakeuptimer.wakeup( successCallback,
               errorCallback,
               // a list of alarms to set
               {
                    alarms : vm.alarms
               }
            );
        }

        function removeAlarm (alarm) {

        }



        // snooze...
        // window.wakeuptimer.snooze( successCallback,
        //     errorCallback,
        //     {
        //         alarms : [{
        //             type : 'snooze',
        //             time : { seconds : 60 }, // snooze for 60 seconds
        //             extra : { }, // json containing app-specific information to be posted when alarm triggers
        //             message : this.get('message'),
        //             sound : this.get('sound'),
        //             action : this.get('action')
        //         }]
        //     }
        //  );

         var errorCallback = function (result) {
             console.log('error', result);
         };

        // example of a callback method
        var successCallback = function(result) {
            if (result.type==='wakeup') {
                console.log('wakeup alarm detected--' + result.extra);
            } else if(result.type==='set'){
                console.log('wakeup alarm set--' + result);
            } else {
                console.log('wakeup unhandled type (' + result.type + ')');
            }
        };
    }

}

export default AlarmService;
