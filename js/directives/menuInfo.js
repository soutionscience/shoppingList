app.directive('menuInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
       info: '=' 
    }, 
    templateUrl: 'js/directives/menuInfo.html' 
  }; 
});