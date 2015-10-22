'use strict';

app.directive('ngNote', function() {
  return {
    restrict: 'E',
    replace: true,
    controller : 'NoteCtrl',
    transclude: true,
    scope: {
      todo: '='
  	},
    templateUrl : 'partials/note.html'
  }
});
