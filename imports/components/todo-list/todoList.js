import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';
import { Tasks } from '../../api/tasks.js';

class TodosListCtrl {
  constructor($scope) {
   $scope.viewModel(this);

   this.helpers({
     tasks() {
       return Tasks.find({});
     }
   })
 }
}

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todo-list/todoList.html',
    controller: ['$scope', TodosListCtrl]
  });
