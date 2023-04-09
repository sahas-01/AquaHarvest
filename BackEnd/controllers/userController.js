const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = function (app) {
    app.post('/register', async (req, res) => {
        const { name, email, bio, location, password } = req.body;
        console.log(name, email, bio, location, password);
        try {
            let user = await User.findOne({ email: email })
            console.log(user)
            if (user) {
                return res.status(401).json({
                    message: "User already exists,please login",
                    success: false
                })
            }
            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(password, salt);
            user = await User.create({
                name,
                email,
                bio,
                location,
                password: hashedPassword
            })
            console.log(user)

            res.status(200).json({
                message: "User created successfully",
                success: true,
                data: user
            })

        }
        catch (err) {
            res.status(500).json({
                message: err.message,
                success: false,
            });
            console.log(err);
        }
    })

    app.post('/login', async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid email or password, please try again',
                    success: false,
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({
                    message: 'Invalid password, please try again!',
                    success: false,
                });
            }
            const payload = {
                user: {
                    id: user.id
                }
            };

            const token = jwt.sign(payload, "secretcode", { expiresIn: '20d' });
            res.status(200).json({
                message: 'User logged in successfully',
                success: true,
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    bio: user.bio,
                    location: user.location,
                    password: user.password,
                }
            });
        }
        catch (err) {
            res.status(500).json({
                message: 'Error logging in user',
                success: false,
            });
            // console.log(err);
        }

    })

}




