// http://localhost:3000/api/getblog?slug=auther  

import * as fs from "node:fs"; 

export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => { 
        if(err){
            return res.status(500).send({message: "File does not exist"}); 
        }
      return res.status(200).json(JSON.parse(data));
    });
  }
  

