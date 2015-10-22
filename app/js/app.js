'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myTodoApp', ['ngRoute', 'LocalStorageModule']);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
