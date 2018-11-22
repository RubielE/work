var conexion = require('./connection');

function metodosDB(){
    this.seleccionar = function(respuesta){
        conexion.obtener(function(er, cn) {
            cn.query('select * from lista_medicamentos', function(error, resultado) {
                cn.release();
                if(error){
                    respuesta.send({ estado: 'Error'});
                } else { 
                    respuesta.send(resultado);
                }
            })
        })
    }

    this.seleccionarId = function(id, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query('select * from lista_medicamentos where Id=?',id, function(error, resultado){
                cn.release();
                if (error){
                    respuesta.send({ estado: 'Error'})
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }

    this.insertar = function(datos, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query('insert into lista_medicamentos set ?', datos, function(error, resultado){
                cn.release();
                if (error){
                    respuesta.send({ estado: 'error'});
                } else {
                    respuesta.send({ estado: 'insert exitoso'});
                }
            })
        })
    }

    this.actualizar = function(datos, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query('update lista_medicamentos set ? where id = ?', [datos, datos.id], function(error, resultado){
                cn.release();
                console.log(resultado);
                if (error){
                    respuesta.send({ estado: 'error'});
                } else {
                    respuesta.send({ estado: ' actualizado exitosamente'});
                }
            })
        })
    }

    this.borrar = function(id, respuesta) {
        conexion.obtener(function(er, cn){
            cn.query('delete from lista_medicamentos where Id=?',id, function(error, resultado){
                cn.release();
                if (error){
                    respuesta.send({ estado: 'Error'});
                } else {
                    respuesta.send({ estado: 'Borrado exitoso'});
                }
            })
        })
    }


}
module.exports = new metodosDB();