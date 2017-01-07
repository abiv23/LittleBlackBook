// Update with your config settings.
if (process.env.NODE_ENV !== 'production') require('dotenv').config({
    silent: true
});

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/littleblackbook',
        debug: true
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }


};
