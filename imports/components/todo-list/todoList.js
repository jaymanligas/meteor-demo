import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';
import { Tasks } from '../../api/tasks.js';

class TodosListCtrl {

  constructor($scope) {

    $scope.viewModel(this);

    this.helpers({
      
      tasks() {
        const selector = {};
        // If hide completed is checked, filter tasks

        if (this.getReactively('hideCompleted')) {
          console.log('reactive')
          selector.checked = {
            $ne: true
          };
        }
        // Show newest tasks at the top
        return Tasks.find(selector, { sort: {  createdAt: -1  } })
      }
    })

  }

  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      createdAt: new Date,
      checked : false
    });
    // Clear form
    this.newTask = '';
  }

  setChecked(task) {
    // Set the checked property to the opposite of its current value
    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      },
    });
  }

  removeTask(task) {
    Tasks.remove(task._id);
  }

  incompleteCount() {
    return Tasks.find({checked: false}).count();
  }
}







export default angular.module('todosList', [
  angularMeteor
])
.component('todosList', {
  templateUrl: 'imports/components/todo-list/todoList.html',
  controller: ['$scope', TodosListCtrl]
});
