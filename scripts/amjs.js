(function(){
    'use strict';

    var app = angular.module('MNEagle', ['ngMaterial'])
    app.controller('AppCtrl', function($scope) {

        $scope.data = [
            {
                who: 'Min Li Chan',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                who: 'Min Li Chan',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                who: 'Min Li Chan',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                who: 'Min Li Chan',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
    });
    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('altTheme')
    });

    app.config(function($mdThemingProvider) {
        var bostonBlueMap =$mdThemingProvider.extendPalette('blue', {
            '500':'40a3ad'
        });
        var matterHornMap = $mdThemingProvider.extendPalette('grey', {
            'A200': '4e4e4e',
            'contrastDefaultColor': 'light'
        });
        var purpleMixMap = $mdThemingProvider.extendPalette('purple', {
            '500': 'a73c96'
        });
        var bgColorMixMap = $mdThemingProvider.extendPalette('blue-grey', {
            'A200': 'f0f3e6'
        });
        $mdThemingProvider.definePalette('bostonBlue', bostonBlueMap);
        $mdThemingProvider.theme('altTheme')
            .primaryPalette('bostonBlue')


        $mdThemingProvider.definePalette('matterHorn', matterHornMap);
        $mdThemingProvider.theme('altTheme')
            .accentPalette('matterHorn')

        $mdThemingProvider.definePalette('purpleMix', purpleMixMap);
        $mdThemingProvider.theme('altTheme')
            .warnPalette('purpleMix')

        $mdThemingProvider.definePalette('bgColorMix', bgColorMixMap);
        $mdThemingProvider.theme('altTheme')
            .backgroundPalette('bgColorMix', {
                'default': 'A200'
            })
    });
})();
