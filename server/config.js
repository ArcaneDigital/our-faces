var PRODUCTION = false;
if (process.env.NODE_ENV === 'production') {
    PRODUCTION = true;
}

var Config = {

    express: {
        port: process.env.PORT || 3000,
        ip: PRODUCTION ? '0.0.0.0' : '192.168.10.10'        
    },

    mongo: {
        port: process.env.MONGO_PORT || 27017,
        host: process.env.MONGOLAB_URI || 'localhost',
        user: process.env.MONGO_USER || '',
        pass: process.env.MONGO_PASS || ''
    },

    api: {
        version: 1
    }

}

module.exports = Config;
