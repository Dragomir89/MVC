var app = app || {};


app.viewModel = (function(){

    function ViewModel(model){
        this.model = model;
        this.attachEventListeners();
    }

    ViewModel.prototype.showAllStudents = function(){

            this.model.getAll(function(students){

                var allStudents = students.results;
                    console.log(allStudents);
                    allStudents.forEach(function(e){
                        addStudentToDom(e);
                    });
            },
            function(){
                console.log('cant take students');
                return false;
            });
    };
    ViewModel.prototype.attachEventListeners = function(){

        var addStudBTN = $('#addStudent');

        addStudBTN.click(function(){
            console.log('click');
            app.viewModel.students.addStudent();
        })
    };
    ViewModel.prototype.addStudent = function(){
        var studentName = $('#student-name').val();
        var studentAge = +$('#student-age').val();

        var newStudent = {
            name:studentName,
            age:studentAge
        };

        this.model.postStudent(newStudent,
            function(obj){
                console.log(obj);
                addStudentToDom(obj,studentName,studentAge);
                console.log('ADDED STUDENT')
            },
            function(obj){
                console.log(obj);
                console.log('error');
            }
        )
    };
    ViewModel.prototype.delete = function(id){

        this.model.deleteStudent(id,
        function(obj){
            console.log(obj);
            console.log('DELETE')
        },
        function(error){
            console.log(error.responseText);
            console.log('ne se trie');
        })

    };




    function addStudentToDom(student,name,age){

        var studentWrapper = $('<div>');
        var studentNameP = $('<p>');
        var studentAgeP = $('<p>');
        var btn = $('<button>delete</button>');
        var stID = student.objectId;


        var valueName = student.name ? student.name : name;
        var valueAge = student.age ? student.age : age;


        studentWrapper.addClass('studentWrapper');

        studentNameP.text(valueName);
        studentAgeP.text(valueAge);
        studentWrapper.attr('data-id',student.objectId);

        studentNameP.addClass('studentInfo');
        studentAgeP.addClass('studentInfo');

        studentNameP.appendTo(studentWrapper);
        studentAgeP.appendTo(studentWrapper);
        btn.appendTo(studentWrapper);

        btn.click(function(){
            app.viewModel.students.delete(stID);

            studentWrapper.remove();

        });


        studentWrapper.appendTo('#students-container');
    }

    return {
        loadView : function(model){
                return new ViewModel(model);
            }
    }



})();



