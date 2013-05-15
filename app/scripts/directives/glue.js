exApp = angular.module('exApp')
exApp.directive('glue', ['$compile', function($compile) {
  return {
    restrict: 'A',
    link: function (scope, el, attrs) {
      el.append(scope.item.toString());
      $compile(el.contents())(scope);
    }
  }
}])