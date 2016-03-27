angular.module( 'YourApp', [ 'ngMaterial' ] )
.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme("default").primaryColor("blue").accentColor("red");
}).controller('TestCtrl', function ($scope) {
});
