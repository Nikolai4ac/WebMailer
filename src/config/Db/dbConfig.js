require('dotenv').configDotenv({path: "../../.env"});

const DBUSER = process.env.DBUSER;
const DBHOST = process.env.DBUSER;
const DBPASS = process.env.DBPASS;

const dbCredentialsConfig = {
    dbUser: DBUSER,
    dbHost: DBHOST,
    dbPass: DBPASS
}

module.exports = dbCredentialsConfig;