const Farm = require("../models/Farm");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const Fish = require("../models/fish");
const Comments = require("../models/Comments");
dotenv.config();

module.exports = function (app) {
  app.post("/farm", async (req, res) => {
    console.log("gonna create new farm");
    const newObj = req.body;
    console.log(newObj);
    // newObj.name = newObj.farmName;
    // console.log(newObj);

    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    const newFarm = new Farm(newObj);

    try {
      const savedFarm = await newFarm.save();
      console.log(savedFarm);
      return res.status(200).send({
        message: "Farm created successfully",
        farm: savedFarm,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  //write a get function to get farm details from farm collection
  app.get("/getFarm", async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    try {
      const farm = await Farm.find({ userToken: req.query.userToken });
      res.status(200).json(farm);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  app.post("/addfish", async (req, res) => {

    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    const newFish = new Fish(req.body);

    try {
      const savedFish = await newFish.save();
      console.log(savedFish);
      return res.status(200).send(savedFish);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.get("/getFish", async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    try {
      const fish = await Fish.find();
      res.status(200).json(fish);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  app.post("/addcomment", async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    let { comment, date } = req.body;
    let newDate = new Date(date);
    const newComment = new Comments({
      comment,
      newDate,
    });
    try {
      const savedComment = await newComment.save();
      console.log(savedComment);
      return res.status(200).send(savedComment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.get("/getcomments", async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    try {
      const comments = await Comments.find();
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  });


};
