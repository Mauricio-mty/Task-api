const Tag = require('../models/TagModel');
const sequelize = require("../config/db");

const TagService = {};


//Function to create new tag
TagService.createTag=async(newData)=>{
    try {
        const new_tag=await Tag.create(newData);
        return new_tag;
    } catch (error) {
        console.error("Error al crear la etiqueta",error);
        throw new Error("Error al crear la etiqueta");
    }
}

//function to lsit all tags
TagService.getAll=async()=>{
    try{
        const data= await Tag.findAll();
        return data;

    }catch(error){
        console.error("Error retrieving tags",error);
        throw new Error("Error retrieving tags");
    }
}

//function to get one tag by id
TagService.getOneTag=async(id)=>{
    try {
        const data= await Tag.findByPk(id);
        if(!data) throw new Error("Tag not found");
        return data;
        
    } catch (error) {
        console.error("Error retrieving tag",error);
        throw new Error("Error retrieving tag");
    }
}

//function tonupdate one tag
TagService.updateTag=async(id,data)=>{
    try {
        const tag= await Tag.findByPk(id);
        if(!tag) throw new Error("Tag not found");
        await tag.update(data);
        return tag;
        
    } catch (error) {
        console.error("Error retrieving tag",error);
        throw new Error("Error retrieving tag");
    }
}

//funtcion to delete one tag
TagService.deleteTag=async(id)=>{
     try {
        const data= await Tag.findByPk(id);
        if(!data) throw new Error("Tag not found");
        const deleted = data.get({plain:true});
        await data.destroy();
       return({"Tag eliminado":deleted});
        
    } catch (error) {
        console.error("Error retrieving tag",error);
        throw new Error("Error retrieving tag");
    }
}

module.exports = TagService;