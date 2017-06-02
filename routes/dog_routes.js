var _=require('lodash');
var Dog=require('../models/Dog_model.js');
module.exports=function(app){
    //_dogs=[];

    //create//
    app.post('/dog',function(req,res){
      var newDog=new Dog(req.body);
      newDog.save(function(err){
        if(err){
          res.json({info:"dog not created sucessfully",error:err})
        };
        res.json({info:"dog created sucessfully"});
      });
    });

    //read//
    app.get('/dog',function(req,res){
      Dog.find(function(err,dogs){
        if(err){
          res.json({info:"dog not created sucessfully",error:err});
        };
        res.json({info:"dog found sucessfully",data:dogs});

      });
      //console.log(_dogs);
      //res.send(_dogs);
    });

    app.get('/dog/:id',function(req,res){
    /*  res.send(
        _.find(
          _dogs,
          {
            name:req.params.id
          }
        )
      );*/
      Dog.findById(req.param.id,function(err,dog){
        if(err){
          res.json({info:"dog not created sucessfully",error:err});
        };
        if(dog){
          res.json({info:"dog found sucessfully",data:dog});
        }
        else {
          res.json({info:"dog not found"});
        }
      });
    });

    //update//
    app.put('/dog/:id',function(req,res){
    /*  var index=_.findIndex(
        _dogs,
        {
          name:req.params.id
        }
      );
      _.merge(_dogs[index],req.body);*/
      Dog.findById(req.param.id,function(err,dog){
        if(err){
          res.json({info:"dog not created sucessfully",error:err});
        };
        if(dog){
          _.merge(dog,req.body);
          dog.save(function(err){
            if(err){
              res.json({info:"dog not updated sucessfully",error:err});
            };

            res.json({info:'dogs updated sucessfully'});
          });
        }else{
          res.json({info:"dog not foound"});
        }
      });
    });

    //delete//
    app.delete('/dog/:id',function(req,res){
      /*_.remove(_dogs,function(dog){
        return dog.name===req.params.id;
      });*/
      Dog.findByIdAndRemove(req.param.id,function(err){
        if(err){
          res.json({info:"dog not deleted sucessfully",error:err});
        };
      res.json({info:'dogs deleted sucessfully'});
    });
  });
};
