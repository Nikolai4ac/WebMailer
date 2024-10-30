require('dotenv').configDotenv({path: "../../.env"});
const PORT = process.env.PORT;
const config = {
    port: PORT
};

module.exports = config