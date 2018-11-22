var db = require('./queries');
function http() {

    this.configurar = function(app) {
        app.get('/lista_medicamentos/', function(solicitud, respuesta ){
            db.seleccionar(respuesta);
        })

        app.get('/lista_medicamentos/:id/', function(solicitud, respuesta) {
            db.seleccionarId(solicitud.params.id, respuesta);
        })

        app.post('/lista_medicamentos/', function(solicitud, respuesta) {
            console.log(solicitud);
            db.insertar(solicitud.body, respuesta);
        })

        app.put('/lista_medicamentos/', function(solicitud, respuesta) {
            db.actualizar(solicitud.body, respuesta);
        })


        app.delete('/lista_medicamentos/:id/', function(solicitud, respuesta) {
            console.log(solicitud);
            db.borrar(solicitud.params.id, respuesta);
        })
    }
}
module.exports = new http();