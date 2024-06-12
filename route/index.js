import express from "express";
import { prisma } from "../prismaConfig.js";
import Validation from "../validation/classVal.js";
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const getData = await prisma.company.findMany();
  if (getData.length <= 0) return res.status(404).json({status:false,message:`wax xog eh majiraan!`});
  res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({status:false,message:"internal error"});
  }
  
});
app.get("/:id", async (req, res) => {
    try {
        const getData = await prisma.company.findUnique({
            where:{id:req.params.id}
        });
        if(!getData) return res.status(404).json({status:false,message:`waalaso waayay!`});
        res.status(200).json(getData);
    } catch (error) {
        res.status(500).json({status:false,message:"internal error"});
    }
   
  });
app.post("/", async (req, res) => {
  try {
    const { error } = Validation(req.body);
    if (error) return res.status(400).json({status:false,message:error.message});
    const postData = await prisma.company.create({ data: req.body });
    res.status(201).json("sucessfully created");
  } catch (error) {
    res.status(500).json({status:false,message:"internal error"});
  }
});
app.put("/:id", async (req, res) => {
  try {
    const { error } = Validation(req.body);
    if (error) return res.status(400).json({status:false,message:error.message});
    const updateData = await prisma.company.update({
      where: { id: req.params.id },
      data:req.body
    });
    res.status(200).json("sucessfully created");
  } catch (error) {
    res.status(500).json({status:false,message:"internal error"});
  }
});
export default app;
