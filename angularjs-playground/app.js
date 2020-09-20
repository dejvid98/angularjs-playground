const myapp = angular.module('myapp', ['ngRoute']);

myapp.config([
  '$routeProvider',
  ($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'routes/home.html',
      })
      .when('/login', {
        templateUrl: 'routes/login.html',
      })
      .otherwise('/404', {
        templateUrl: 'routes/404.html',
      });
  },
]);

myapp.directive('navbar', () => {
  return {
    templateUrl: 'components/Navbar.html',
  };
});

myapp.controller('todo', [
  '$scope',
  ($scope) => {
    $scope.firstName = 'David';
    $scope.lastName = 'Suki';
    $scope.fullName = () => {
      return $scope.firstName + ' ' + $scope.lastName;
    };
  },
]);
