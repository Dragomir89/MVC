var app = app || {};

(function(){

    var model = app.models.loadModels('https://api.parse.com/1/classes/');

    var viewModel = new app.viewModel.loadViewModel(model);
/*
    model.students.getAllStudents(function(data){

        var allStudents = data.results;

        console.log(allStudents);


        for(var i = 0; i < allStudents.length; i++){

            console.log(allStudents[i].name);

            var studentWrapper = $('<div>');

            $('<p>').text(allStudents[i].name).appendTo(studentWrapper);
            $('<p>').text(allStudents[i].age).appendTo(studentWrapper);
            $('#students-container').append(studentWrapper);
        }
    },function(){
        console.log('ERROR');
    });
*/

    console.log(model.students);

    //viewModel.showAllStudents();


}());