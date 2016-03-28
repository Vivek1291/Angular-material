(function(){
    'use strict';
    var app = angular.module('MNEagle', ['ngMaterial'])
    /*Color Theme for all pages*/
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

  /*Data used for ng-repeat for several site*/
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

    /*Bottom Sheet Script*/
    app.controller('bottomSheetExample', function($scope) {

    });

    /*Date picker script    */
    app.controller('datePic', function($scope) {
       $scope.myDate= new Date();
        $scope.minDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() - 2, $scope.myDate.getDate());
        $scope.maxDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() + 2, $scope.myDate.getDate());
        $scope.onlyWeekendsPredicate = function(date) {
            var day = date.getDay()
            return day===0 || day===6;
        }
    });
    /*Checkbox script*/

    app.controller('checkboxControl', function($scope) {
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;
    });

    app.controller('BasicDemoCtrl', DemoCtrl);

    function DemoCtrl() {
        var self = this;
        self.readonly = false;
        self.fruitNames = ['Apple', 'Banana', 'Orange'];
        self.repeatFruitNames = angular.copy(self.fruitNames);
    }
})();
