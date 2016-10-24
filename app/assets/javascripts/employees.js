Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object
  }
})

var employees = new Vue({
  el: "#employees",
  data: {
    employees: []
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
  }
});
