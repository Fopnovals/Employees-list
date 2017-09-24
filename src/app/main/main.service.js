(function() {
  'use strict';

  angular
    .module('Test')
    .service('mainService', mainService);

  /** @ngInject */
  function mainService($timeout, colors) {
    var _this = this;

    _this.getColors = function() {
      var lengthColors = _this.employees.length;
      var allColors = [];
      do{
        colors.map(function(col) {
          allColors.push(col);
        });
      }while(allColors.length <= lengthColors);

      return allColors;
    };

    _this.onFocus = {
      employeeName: '',
      position: '',
      phone: '',
      date: '',
      email: ''
    };

    _this.dataForm = {
      employeeName: '',
      position: '',
      phone: '',
      date: '',
      email: ''
    };

    _this.setFocus = function(target) {
      _this.onFocus[target] = 'focused';
      return _this.onFocus;
    };

    _this.clearFocus = function(target) {
      _this.onFocus[target] = '';
      return _this.onFocus;
    };

    _this.clearDataForm = function() {
      _this.dataForm = {
        employeeName: '',
        position: '',
        phone: '',
        date: '',
        email: ''
      };
      return _this.dataForm;
    };

    _this.employees = angular.fromJson(localStorage.getItem('employeesList')) || [];

    _this.addPerson = function(data) {
      if(!data['id']) {
        data.id = new Date().getTime();
        _this.employees.unshift(data);
      } else {
        _this.employees.map(function(el, ind) {
          if(el.id === data.id) {
            _this.employees[ind] = data;
          }
        });
      }
      _this.setStorage();
    };

    _this.editPerson = function(id) {
      _this.employees.map(function(employee) {
        if(id === employee.id) {
          _this.dataForm = employee;
          return _this.dataForm;
        }
      });
    };

    _this.removePerson = function(id) {
      _this.employees.map(function(employee, index) {
        if(id === employee.id) {
          _this.employees.splice(index, 1);
        }
      });
      if(id === _this.dataForm.id) {
        _this.clearDataForm();
      }
      _this.setStorage();
    };

    //saving employees in localStorage
    _this.setStorage = function() {
      var employeesList = angular.toJson(_this.employees);
      localStorage.setItem('employeesList', employeesList);
    };

  }
})();
