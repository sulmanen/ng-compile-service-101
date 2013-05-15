'use strict';

exApp.controller('MainCtrl', function($scope) {
  $scope.items = ['<button ng-click="yo()">One</button>', '<button ng-click="yo()">Two</button>'];

  $scope.yo = function() {
    alert('yo');
  }
});
