//var feathers = require('feathers');
//var router = feathers.Router();

var todoService = {
    get: function(id, params, callback) {
        // Call back with no error and the Todo object
        callback(null, {
            id: id,
            text: 'You have to do ' + id + '!'
        });
    }
};
module.exports.todoService = todoService;
