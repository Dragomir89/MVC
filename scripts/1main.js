var app = app || {};


$(document).ready(function(){

    (function(){

        var model = app.model.loadStudent('https://www.parse.com/1/classes/');

        app.viewModel.students = new app.viewModel.loadView(model);

        app.viewModel.students.showAllStudents();


    })();

});