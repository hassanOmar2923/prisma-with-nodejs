import express from "express";
import { prisma } from "../prismaConfig.js";
import Validation from "../validation/stdval.js";
const app = express.Router();

app.get("/", async (req, res) => {
    try {
        const getData = await prisma.students.findMany({
            include:{
                class:{
                    select:{
                        cName:true,
                    }
                    
                }
            }
          });
          res.json(getData);
    } catch (error) {
        res.send(error.message);
    }
  
});
app.get("/:phone", async (req, res) => {
    try {
        const getData = await prisma.students.findUnique({
            where:{
                phone:parseInt(req.params.phone)
            }
        });
          res.json(getData);
    } catch (error) {
        res.send(error.message);
    }
  
});
app.post("/", async (req, res) => {
    try {
      const { error } = Validation(req.body);
      if (error) return res.json(error.message);
      const postData = await prisma.students.create({ data: req.body });
      res.json("sucessfully created");
    } catch (error) {
      res.send(error.message);
    }
  });


export default app