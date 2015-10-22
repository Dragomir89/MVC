var app = app || {};

(function(){

    var model = app.models.loadModels('https://api.parse.com/1/classes/');

    model.students.getAllStudents(function(data){

            var arrSudents = data.results;

            for(var i = 0; i < arrSudents.length; i++){
                console.log(arrSudents[i].name + '  id- ' + arrSudents[i].objectId)
            }
        },function(){
            console.log('ERROR')
        });


}());