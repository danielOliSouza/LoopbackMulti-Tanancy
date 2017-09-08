var DataSource = require('loopback-datasource-juggler').DataSource;
var LoopBackContext = require('loopback-context');
var app = require("../server.js");

module.exports = function(options) {
    return function(req, res, next){

        var loopbackContext = LoopBackContext.getCurrentContext();
        var userId = loopbackContext.get('AccessToken.userId');
        var dataSource;

        console.log(userId);

        if(userId == 01){
            dataSource = new DataSource({
                connector: require('loopback-connector-mysql'),
                host: 'localhost',
                port: 3306,
                database: 'acesso-02',
                user:"root",
                password: "******"
            });
        }
        else{
            dataSource = new DataSource({
                connector: require('loopback-connector-mysql'),
                host: 'localhost',
                port: 3306,
                database: 'acesso-03',
                user:"root",
                password: "******"
            });
        }
        app.models.Teste.attachTo(dataSource);
        next();
    }
}
