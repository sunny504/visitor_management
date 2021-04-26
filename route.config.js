exports.routesConfig =  (app) => {



    app.get('/',async (req,res) => {
        try {
    
          res.send({ statusCode : 200,
            message:"Successfully Found List.",
            data :[userList] });
    
        } catch (e) {
          res.send({statusCode : 202,
            message:e.message});
        }
      });

}
