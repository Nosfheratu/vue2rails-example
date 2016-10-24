class EmployeesController < ApplicationController
  def index
    @employees = Employee.all

    respond_to do |format|
      format.html
      format.json { render json: @employees }
    end
  end

  def create
    @employee = Employee.new(employee_params)
    respond_to do |format|
      format.json do
        if @employee.save
          render json: @employee
        else
          render json: { errors: @employee.errors.messages }, status: 422
        end
      end
    end
  end

  private

  def employee_params
    params.require(:employee).permit(:name, :email, :manager)
  end
end
