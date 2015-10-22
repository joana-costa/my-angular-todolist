'use strict';

app.controller('NoteCtrl', ['$scope', function($scope) {
	
	$scope.checkTodo = function() {
		$scope.todo.done = true;
		$scope.todo.updateCallback();
	};
	
	$scope.removeTodo = function() {
		$scope.todo.removeSelf();
	};
	
}]);
