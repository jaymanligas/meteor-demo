import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todo-list/todoList';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  'accounts.ui'
]);

function onReady(){
  console.log('Ready');
}
