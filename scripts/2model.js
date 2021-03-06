var app = app || {};


app.model = (function(){
    var Requester =(function(){
        function makeRequest(method, url, data, success, error) {
            $.ajax({
                method: method,
                headers: {

                    'X-Parse-Application-Id' : 'fqPA3LNUDdK19OTSdvgK0JfEpVJAknt8sGAeZCdv',
                    'X-Parse-REST-API-Key' : 'f5RTxXWcv3wvivayqQWUTptDLYQcNpi87absKPdz'
                },
                url : url,
                contentType: 'application/json',
                data : JSON.stringify(data),
                success: success,
                error: error
            })
        }

        function getRequest(url, success, error){
            return makeRequest('GET', url, null, success, error);
        }
        function postRequest(url, data, success, error){
            return makeRequest('POST', url, data, success, error);
        }
        function deleteRequest(url, success, error){
            return makeRequest('DELETE', url, null, success, error)
        }

        return {
            get    : getRequest,
            post   : postRequest,
            delete : deleteRequest
        }
    })();

    function Student(baseUrl){
            this.serviceUrl = baseUrl + 'myClass/'
        }

        Student.prototype.postStudent = function(data, success, error){
            return Requester.post(this.serviceUrl ,data,success,error)
        };
        Student.prototype.getAll = function(success, error){
            return Requester.get(this.serviceUrl, success, error);
        };
        Student.prototype.deleteStudent = function(id, success,error){

            var currentID = this.serviceUrl + id
            return Requester.delete(currentID,success,error);
        };

    return{
        loadStudent : function(baseURL){
            return new Student(baseURL);
        }
    }
})();













