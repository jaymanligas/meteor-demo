import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todo-list/todoList';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);
