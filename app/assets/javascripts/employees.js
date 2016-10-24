Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object
  },
  data: function(){
    return {
      editMode: false,
      errors: {}
    }
  },
  methods: {
    toggleManagerStatus: function() {
      this.employee.manager = !this.employee.manager;
      this.updateEmployee();
    },
    updateEmployee: function() {
      var that = this;
      $.ajax({
        method: 'PUT',
        data: {
          employee: that.employee
        },
        url: '/employees/' + that.employee.id + '.json',
        success: function(response) {
          that.errors = {};
          that.employee = response;
          that.editMode = false;
        },
        error: function(response) {
          that.errors = response.responseJSON.errors;
        }
      });
    }
  }
})

var employees = new Vue({
  el: "#employees",
  data: {
    employees: [],
    employee: {
      name: '',
      email: '',
      manager: false
    },
    errors: {}
  },
  mounted: function() {
    var that;
    that = this;
    $.ajax({
      url: '/employees.json',
      success: function(response) {
        that.employees = response;
      }
    });
  },
  methods: {
    hireEmployee: function() {
      var that = this;
      $.ajax({
        method: 'POST',
        data: {
          employee: that.employee
        },
        url: '/employees.json',
        success: function(response) {
          that.errors = {};
          that.employees.push(response);
        },
        error: function(response) {
          that.errors = response.responseJSON.errors;
        }
      })
    }
  }
});
