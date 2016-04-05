angular.module('MNEagle',['ngMaterial', 'ngMessages'])

    .controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
        $scope.alert = '';

        $scope.showListBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-list-template.html',
                controller: 'ListBottomSheetCtrl'
            }).then(function(clickedItem) {
                $scope.alert = clickedItem['name'] + ' clicked!';
            });
        };

        $scope.showGridBottomSheet = function() {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-grid-template.html',
                controller: 'GridBottomSheetCtrl',
                clickOutsideToClose: false
            }).then(function(clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(clickedItem['name'] + ' clicked!')
                        .position('top right')
                        .hideDelay(1500)
                );
                $scope.alert = clickedItem['name'] + ' clicked!';
            });
        };
    })

    .controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

        $scope.items = [
            { name: 'Share' },
            { name: 'Upload'},
            { name: 'Copy'},
            { name: 'Print this page'},
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Hangout'},
            { name: 'Mail'},
            { name: 'Message'},
            { name: 'Copy'},
            { name: 'Facebook'},
            { name: 'Twitter'},
        ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
