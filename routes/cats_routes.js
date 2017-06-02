var _=require('lodash');
var Cat=require('../models/Cat_model.js');
module.exports=function(app){
    //_cats=[];

    //create//
    app.post('/cat',function(req,res){
      var newCat=new Cat(req.body);
      newCat.save(function(err){
        if(err){
          res.json({info:"cat not created sucessfully",error:err})
        };
        res.json({info:"cat created sucessfully"});
      });
    });

    //read//
    app.get('/cat',function(req,res){
      Cat.find(function(err,cats){
        if(err){
          res.json({info:"cat not created sucessfully",error:err});
        };
        res.json({info:"cat found sucessfully",data:cats});

      });
      //console.log(_cats);
      //res.send(_cats);
    });

    app.get('/cat/:id',function(req,res){
    /*  res.send(
        _.find(
          _cats,
          {
            name:req.params.id
          }
        )
      );*/
      Cat.findById(req.param.id,function(err,cat){
        if(err){
          res.json({info:"cat not created sucessfully",error:err});
        };
        if(cat){
          res.json({info:"cat found sucessfully",data:cat});
        }
        else {
          res.json({info:"cat not found"});
        }
      });
    });

    //update//
    app.put('/cat/:id',function(req,res){
    /*  var index=_.findIndex(
        _cats,
        {
          name:req.params.id
        }
      );
      _.merge(_cats[index],req.body);*/
      Cat.findById(req.param.id,function(err,cat){
        if(err){
          res.json({info:"cat not created sucessfully",error:err});
        };
        if(cat){
          _.merge(Cat,req.body);
          cat.save(function(err){
            if(err){
              res.json({info:"cat not updated sucessfully",error:err});
            };

            res.json({info:'cats updated sucessfully'});
          });
        }else{
          res.json({info:"cat not foound"});
        }
      });
    });

    //delete//
    app.delete('/cat/:id',function(req,res){
      /*_.remove(_cats,function(cat){
        return cat.name===req.params.id;
      });*/
      Cat.findByIdAndRemove(req.param.id,function(err){
        if(err){
          res.json({info:"cat not deleted sucessfully",error:err});
        };
      res.json({info:'cats deleted sucessfully'});
    });
  });
};
