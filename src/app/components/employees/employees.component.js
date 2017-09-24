(function() {
  'use strict';

  angular
    .module('Test')
    .component('employeesComponent', {
      templateUrl: 'app/components/employees/employees.template.html',
      bindings: {

      },
      controller: function(mainService) {
        var _this = this;

        _this.employees = mainService.employees;
        _this.colors = mainService.getColors();

        _this.editPerson = function(employee) {
          mainService.editPerson(employee.id);

        };

        _this.removePerson = function(employee) {
          mainService.removePerson(employee.id);
        };

      }
    });
})();
