var app = app || {};

app.viewModel = (function(){

    function ViewModel(model) {
        this.model = model;

    }

    ViewModel.prototype.showAllStudents = function(){

        this.model.students.getAllStudents(function(data){

            var allStudents = data.results;

            console.log(allStudents);

            for(var i = 0; i < allStudents.length; i++){

                $('#students-container').append(addStudentToDom(allStudents[i]));

            }
        },function(){
            console.log('ERROR');
        });
    };


    ViewModel.prototype.addStudent = function(){

        var studentName = $('#student-name').val();
        var studentAge = +$('#student-age').val();

        var student = {
            name: studentName,
            age: studentAge
        };

        this.model.students.postStudent(student,function(data){
            console.log(data);

            addStudentToDom(student);

        },function(){
            console.log('I cant add student');
        })

    };


    function addStudentToDom(student){
        var studentWrapper = $('<div>');
        var name = $('<p>').text(student.name);
        var age = $('<p>').text(student.age);
        var button = $('<button>').text('delete');

        studentWrapper.addClass('studentWrapper');
        name.addClass('studentInfo');
        age.addClass('studentInfo');
        studentWrapper.attr('id', student.objectId);

        name.appendTo(studentWrapper);
        age.appendTo(studentWrapper);
        button.appendTo(studentWrapper);

        return studentWrapper;
    };

    return {
        loadViewModel : function(model){
            return new ViewModel(model);
        }

    }
})();