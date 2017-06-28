var router = require("express").Router(), servicio = require("../model/servicio")

router.get("/apiServicio/ID/:idEmpresa", function(req,res,next){
    if(req.params.idEmpresa != null){
        servicio.selectAll(req.params.idEmpresa, function(error, resultado){
            if(resultado == null){
                res.json({Mensaje: "No se encontraron datos"})
            }else{
                res.json(resultado)
            }
        })
    }
})

router.get("/apiServicio/:idServicio", function(req,res,next){
    if(req.params.idServicio != null){
        servicio.select(req.params.idServicio, function(error, resultado){
            if(resultado == null){
                res.json({Mensaje: "SIN RESULTADO"})
            }else{
                if(resultado.length != 0){
                    res.json(resultado[0])
                }else{
                    res.json({Mensaje: "Servicio no encontrado"})
                }
            }
        })
    }
})

router.post("/apiServicio", function(req,res,next){
    var data = [req.body.idMecanico, req.body.idAuto, req.body.fecha ,req.body.idEmpresa]
    servicio.insert(data, function(error, resultado){
        if(resultado == null){
            res.json({Mensaje: false})
        }else{
            res.json({Mensaje: true})
        }
    })
})

router.put("/apiServicio/:idServicio", function(req,res,next){
    if(req.body.idServicio == req.params.idServicio){
        var data = [req.body.idMecanico, req.body.idAuto, req.body.fecha ,req.body.idEmpresa, req.body.idServicio]
        servicio.update(data, function(error, resultado){
            if(resultado == null){
                res.json({Mensaje: false})
            }else{
                res.json({Mensaje: true})
            }
        })
    }
})

router.delete("/apiServicio/:idServicio", function(req,res,next){
    servicio.delete(req.params.idServicio, function(error, resultado){
        if(resultado == null){
            res.json({Mensaje: false})
        }else{
            res.json({Mensaje: true})
        }
    })
})

module.exports = router;