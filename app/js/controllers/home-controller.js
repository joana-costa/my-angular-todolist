'use strict';

app.factory('Todo', function () {
	
  function Todo(title, priority, deadline, done, remove, updateList) {
    this.title = title;
    this.priority = priority;
    this.deadline = deadline;
    this.done = done;
    this.removeSelf = remove(this);
    this.updateCallback = updateList;
  }
	
	return Todo;
	
});

app.controller('HomeCtrl', ['$scope', 'localStorageService', 'Todo', function($scope, localStorageService, Todo) {

	window.MY_SCOPE = $scope;
	$scope.alertMessage = "";
	
	initForm();
  
  var todosLocalStorage = localStorageService.get('todos');
  angular.forEach(todosLocalStorage, function(todo, key){
    todo.removeSelf = removeTodo(todo);
    todo.updateCallback = updateList;
	});
	
  $scope.todos = todosLocalStorage || [];

  $scope.setPriority = function(priority) {
      $scope.todo.priority = priority;
  };
	
	$scope.addTodo = function() {
		if($scope.todo.title == ""){
			$scope.alertMessage = "Task can't be empty";
		}else{
			console.log($scope.todo.priority);
			$scope.alertMessage = "";
			$scope.todos.push(new Todo($scope.todo.title, $scope.todo.priority?$scope.todo.priority:0, $scope.todo.deadline, false, removeTodo, updateList));
			initForm();
		}
	};
	
	$scope.cleanLocalStorage = function() {
		if (confirm ('Do you really want to remove all the tasks (can\'t be undone)?')) { 
			$scope.todos = [];
		}
	};
	
	$scope.$watchCollection('todos', function () {
		localStorageService.set('todos', $scope.todos);
	});
	
	function initForm() {
		$scope.todo = {
			title : '',
			priority : 0,
			deadline : null,
			done : false
		}
	}
	
	function removeTodo(todo){
		var removeSelf = function(){
			if (confirm ('Do you really want to remove this task?')) { 
				$scope.todos.splice($scope.todos.indexOf(todo), 1);
			}
		}
		return removeSelf;
	}
	
	function updateList(){
		localStorageService.set('todos', $scope.todos);
	}
	
}]);
