(function() {
  'use strict';

  angular
    .module('Test')
    .component('addComponent', {
      templateUrl: 'app/components/add/add.template.html',
      bindings: {

      },
      controller: function(mainService, $timeout) {
        var _this = this;

        _this.mainService = mainService;

        _this.onFocus = mainService.onFocus;
        _this.dataForm = mainService.dataForm;

        _this.focusEffect = function($event) {
          _this.onFocus = mainService.setFocus($event.target.name);
        };
        _this.blurEffect = function($event) {
          _this.onFocus = mainService.clearFocus($event.target.name);
        };

        _this.addEmployee = function (employee) {
          var dataForm = {
            employeeName: _this.dataForm.employeeName,
            date: _this.dataForm.date,
            position: _this.dataForm.position,
            phone: _this.dataForm.phone,
            email: _this.dataForm.email,
            id: _this.dataForm.id
          };
          if(employee.$invalid) {
            _this.validStatus = 'invalid';
            $timeout(function() {
              _this.validStatus = '';
            },2000);
          } else {
            mainService.addPerson(dataForm);
            _this.dataForm = mainService.clearDataForm();
          }
        };

      }
    });
})();
