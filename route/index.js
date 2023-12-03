import express from "express";
import { prisma } from "../prismaConfig.js";
import Validation from "../validation/classVal.js";
const app = express.Router();

app.get("/", async (req, res) => {
  const getData = await prisma.classess.findMany();
  res.json(getData);
});
app.get("/:id", async (req, res) => {
    try {
        const getData = await prisma.classess.findUnique({
            where:{id:req.params.id}
        });
        if(!getData) return res.json('not found');
        res.json(getData);
    } catch (error) {
        res.send(error.message);
    }
   
  });
app.post("/", async (req, res) => {
  try {
    const { error } = Validation(req.body);
    if (error) return res.json(error.message);
    const postData = await prisma.classess.create({ data: req.body });
    res.json("sucessfully created");
  } catch (error) {
    res.send(error.message);
  }
});
app.put("/:id", async (req, res) => {
  try {
    const { error } = Validation(req.body);
    if (error) return res.json(error.message);
    const updateData = await prisma.classess.update({
      where: { id: req.params.id },
      data:req.body
    });
    res.json("sucessfully created");
  } catch (error) {
    res.send(error.message);
  }
});
export default app;
