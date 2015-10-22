var app = app || {};


app.viewModel = (function(){

    function ViewModel(model) {
        this.model = model;

    }

    ViewModel.prototype.showAllStudents = function(){

        this.model.students.getAllStudents(function(data){


            var allStudents = data.results;

            for(var i = 0; i < allStudents.length; i++){

                console.log(allStudents[i].name);

                var studentWrapper = $('<div>');
                var name = $('<p>').text(allStudents[i].name);
                var age = $('<p>').text(allStudents[i].age);
                name.appendTo(studentWrapper);
                age.appendTo(studentWrapper);

                $('#students-container').append(studentWrapper);
            }
        },function(){
            console.log('ERROR');
        });
    };



    return {
        loadViewModel : function(model){
            return new ViewModel(model);
        }

    }
})();