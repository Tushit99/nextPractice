// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "node:fs";

export default function handler(req, res) {
  fs.readFile("blogdata/db.json", "utf-8", (err, data) => {
    // let new_data = JSON.parse(data);
    return res.status(200).json(JSON.parse(data));
  });
}
