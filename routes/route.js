const express=require('express');
const router=express.Router();
const schema=require('../models/schema')
const bodyparser=require('body-parser');
router.use(bodyparser.urlencoded({
    extended:true
}));
router.use(bodyparser.json());
router.post('/wishlist',async (req,res) => {
    const item=new schema({
        UserName:req.body.UserName,
        GameUrl:req.body.GameUrl,
        GameTitle:req.body.GameTitle
    });
    try {
        const newitem=await item.save()
        res.status(201).json(newitem)
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

router.get('/wishlist',async (req,res) => {
    try {
        const newitem=await schema.find().sort({date:-1});
        res.json(newitem);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
router.put('/wishlist/:id',async (req,res) => {
    try {
        const updateditem=await schema.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updateditem);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});
router.delete('/wishlist/:id',async (req,res) => {
    try {
        await schema.findByIdAndDelete(req.params.id);
        res.json({message:'deleted'})
    } catch (error) {
        res.json({message:message.error});
    }
});

module.exports=router;

