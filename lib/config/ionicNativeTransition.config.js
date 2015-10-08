export default function($ionicNativeTransitionsProvider){
    'ngInject';

    $ionicNativeTransitionsProvider.setOptions({
        "duration": 400, // in milliseconds (ms), default 400
        "slowdownfactor": 4, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 60, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 70, // same as above but for Android, default 70
        "winphonedelay": 200, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom": 0 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    });
}
