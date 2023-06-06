// Next.js API route support: https://nextjs.org/docs/api-routes/introduction 

import * as fs from "node:fs";

export default function handler(req, res) {
  fs.readdir("blogdata", (err, data) => {  
    if(err){
       return res.status(500).json({message: "Path does not match"})
    }
    return res.status(200).json(data);
  });
}
