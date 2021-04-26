const fs = require('fs');

exports.routesConfig =  (app) => {


    app.get('/',async (req,res) => {
        try {
          var data = fs.readFileSync('userInfo.json');
          let userList = JSON.parse(data);
          res.send({ statusCode : 200,
            message:"Successfully Found List.",
            data :[userList] });
    
        } catch (e) {
          res.send({statusCode : 202,
            message:e.message});
        }
      });
      
      // post method
      app.post('/addUser', async (req, res) => {

      const getData = fs.readFileSync('userInfo.json')
      const dataJSON = getData.toString()
      const parseData = JSON.parse(dataJSON)

         const userDetails={
          name : req.body.name,
          age  : req.body.age,
          gender : req.body.gender,
          department : req.body.department
         }

         let data =  parseData.push(userDetails)

         const jsonData = JSON.stringify(data);

         fs.writeFileSync('userInfo.json', jsonData)

        try {
          res.send({statusCode : 200,
            message:"getting post request"
        });
        } catch (error) {
          res.send({statusCode : 202,
            message:e.message});
        }
        
      })

}
