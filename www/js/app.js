var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'SideCtrl'
  });
  $stateProvider.state('details', {
    url: '/details',
    templateUrl: 'templates/details.html'
  });
  $stateProvider.state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  });
  $urlRouterProvider.otherwise('/home');
});


app.controller('SideCtrl', function($scope, $ionicSideMenuDelegate) {

  
  var i = true ;

  $scope.toggleSideMenuLeft = function() {
      //$ionicSideMenuDelegate.toggleLeft();
        
      if(i) {
        $("ion-header-bar .ion-navicon").css("display", "none");
      } else {
        $("ion-header-bar .ion-navicon").css("display", "block");
      }
      i = !i ;

      $ionicSideMenuDelegate.canDragContent(false);
      // $("ion-side-menu-content").attr("drag-content", false);

  }
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
