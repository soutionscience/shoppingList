app.directive('pageFooter', function() { 
  return { 
    restrict: 'E', 
    scope: { 
       info: '=' 
    }, 
    templateUrl: 'js/directives/pageFooter.html' 
  }; 
});