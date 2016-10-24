class EmployeesController < ApplicationController
  def index
    @employees = Employee.all

    respond_to do |format|
      format.html
      format.json { render json: @employees }
    end
  end
end
