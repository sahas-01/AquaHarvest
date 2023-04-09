const Tank = require('../models/Tank');
const User = require('../models/User');
const nodemailer = require("nodemailer");
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const fetchUser = require('../middleware/fetchUser');
dotenv.config();
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL, // generated ethereal user
        pass: process.env.PASS // generated ethereal password
    },
});

module.exports = function (app) {

    app.post("/addtank", async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        const newTank = new Tank(req.body);

        try {
            const savedTank = await newTank.save();
            res.status(200).json(savedTank);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });
    //write a get function to get tank details from tank collection
    app.get("/getAlltank", async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        try {
            const tank = await Tank.find();
            res.status(200).json(tank);
        } catch (err) {
            res.status(500).json(err);
        }
    })

    app.post("/addparams", async (req, res) => {
        const filePath = path.join(__dirname, '../template.html');
        const source = fs.readFileSync(filePath, 'utf-8').toString();
        const template = handlebars.compile(source);
        var ammonia = req.body.ammonia;
        var ph = req.body.ph;
        var temp = req.body.temp;
        var userEmail = req.body.userEmail;
        var ranges = {}
        if (ammonia > 0.02) {
            ranges.ammonia = 3;
            const replacements = {
                readingName: "Ammonia",
                readingRate: ammonia,
            };
            const htmlToSend = handlebars.templates(replacements);
            let info = await transporter.sendMail({
                from: '"AquaHarvest"', // sender address
                to: `${userEmail}`, // list of receivers
                subject: "Fish Alert", // Subject line
                html: htmlToSend, // html body
            });
        }
        else {
            ranges.ammonia = 1;
        }
        if (ph > 6.5 && ph < 9) {
            ranges.ph = 1;
        }
        else if (ph > 7 && ph < 9.5) {
            ranges.ph = 2;
        }
        else {
            ranges.ph = 3;
            console.log("ph")
            const replacements = {
                readingName: "PH",
                readingRate: ph,
            };
            const htmlToSend = template(replacements);
            let info = await transporter.sendMail({
                from: '"AquaHarvest"', // sender address
                to: `${userEmail}`, // list of receivers
                subject: "Fish Alert", // Subject line
                html: htmlToSend, // html body
            });
        }
        if (temp > 20 && temp < 30) {
            ranges.temp = 1;
        }
        else if (temp > 15 && temp < 35) {
            ranges.temp = 2;
        }
        else {
            ranges.temp = 3;
            console.log("temp")
            const replacements = {
                readingName: "Temperature",
                readingRate: temp,
            };
            const htmlToSend = template(replacements);
            let info = await transporter.sendMail({
                from: '"AquaHarvest"', // sender address
                to: `${userEmail}`, // list of receivers
                subject: "Fish Alert", // Subject line
                html: htmlToSend, // html body
            });
        }
        res.send(ranges);
    })

    app.get("/getalltanks/:id", async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        try {
            console.log(req.params.id)
            const tank = await User.findById(req.params.id).populate('tanks');
            console.log(tank)
            res.status(200).json(tank);
        } catch (err) {
            res.status(500).json(err);
        }

    }
    )
}