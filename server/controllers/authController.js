const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {initializeConnection} = require("../config/database");

//Load Environment Variables
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;
const refreshSecretKey = process.env.REFRESH_SECRET_KEY;

exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const connection = await initializeConnection();
        const sql = "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";
        await connection.query(sql, [username, email, hashedPassword]);

        res.status(201).send("User Registered Successfully");
    }catch(error) {
        console.error("Error during registration: ", error);
        res.status(500).send("Error Registering User"); 
    }
};

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const connection = await initializeConnection();
        const sql = "SELECT * FROM users WHERE username = ?";
        const [results] = await connection.query(sql, [username]);

        if (results.length === 0) {
            return res.status(401).send("Invalid USERNAME or PASSWORD");
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid username or Password");
        
        }

        const token = jwt.sign(
            {
            id: user.id,
            username: user.username      
            },
            secretKey, 
            {
                expiresIn: "24h"
            }
        );
        const refreshToken = jwt.sign(
            {
                id: user.id,
                username: user.username
            },
            refreshSecretKey
        );

        // Store the refresh token in the DB
        const updateTokenSql = "UPDATE users SET refresh_token = ? WHERE id = ?";
        await connection.query(updateTokenSql, [refreshToken, user.id]);

        res.json({token, refreshToken});
    } catch (error) {
        console.error("Error during Login: ", error);
        res.status(500).send("Error Logging In");
    }
};

exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).send("Refresh Token is Required");
    }

    try {
        const decoded = jwt.verify(refreshToken, refreshSecretKey);
        const connection = await initializeConnection();
        const sql = "SELECT * FROM users WHERE id = ? AND refresh_token = ?";
        const [results] = await connection.query(sql, [decoded.id, refreshToken]);

        if (results.length === 0) {
            return res.status(403).send("Invalid refresh Token");
        }
        
        const user = results[0];
        const newToken = jwt.sign({id: user.id, username: user.username}, secretKey, {expiresIn: "24h"});

        res.json({token: newToken});
    } catch(error) {
        console.error("Error During Token Refresh: ", error);
        res.status(403).send("Invalid Refresh Token");
    }
};

exports.protected = (req, res) => {
    const { username } = req.user;
    res.send(`Welcome ${username}! This is a Protected Route`);
}