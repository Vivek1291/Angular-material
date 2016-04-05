(function(){
    'use strict';
    var app = angular.module('MNEagle', ['ngMaterial', 'ngMaps'])
    /*Color Theme for all pages*/
    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('altTheme')
        $mdThemingProvider.setDefaultTheme('altTheme');
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
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
        $scope.selectedIndex =null;
        $scope.overallStatus = function (index) {
            $scope.selectedIndex = index;
        }
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
    /*MIMN client Details Script*/
    app.controller('multipleReports', function($scope) {
        $scope.data = [
            {
                head: 'Protective',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Educative',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Administrative',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Creative',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Healing',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Entertaining',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Providing',
                content: " I'll be in your neighborhood doing errands"
            },
            {
                head: 'Entrepreneurial',
                content: " I'll be in your neighborhood doing errands"
            }

        ];
        $scope.selectedIndex = null;
        $scope.selectedItem = null;
        $scope.selectedIndividualScores = null;
        $scope.selectedUserIndex = undefined;
        $scope.selectUserIndex = function (index) {
            if ($scope.selectedUserIndex !== index) {
                $scope.selectedUserIndex = index;
            }
            else {
                $scope.selectedUserIndex = undefined;
            }
        };

    })
})();
