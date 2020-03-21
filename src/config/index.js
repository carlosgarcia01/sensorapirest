const convict = require('convict');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
const env = process.env.NODE_ENV;
const envFile = env === 'test' ? '.env.test' : '.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const config = convict({


  /* Mongodb atlas conection */
 // db: process.env.MONGODB_URI || 'mongodb://carlosg:elclasicox1x@carloscluster-shard-00-00-pgwzh.mongodb.net:27017,carloscluster-shard-00-01-pgwzh.mongodb.net:27017,carloscluster-shard-00-02-pgwzh.mongodb.net:27017/SensorTest?ssl=true&replicaSet=CarlosCluster-shard-0&authSource=admin&retryWrites=true&w=majority',
  db:process.env.MONGODB_URI || 'mongodb+srv://carlosg:elclasicox1x@carloscluster-pgwzh.mongodb.net/SensorTest?retryWrites=true&w=majority',

  /**
   * Server config
   */
  host: {
    doc: 'Server host name / IP',
    format: '*',
    default: '0.0.0.0',
  },
  port: {
    doc: 'Server port',
    format: 'port',
    env: 'PORT',
    default: 8080,
  },
  proxy: {
    doc: 'Server proxy',
    format: 'url',
    env: 'HTTP_PROXY',
    default: undefined,
  },

  /**
   * Application config
   */
  env: {
    doc: 'Application environment',
    format: ['development', 'test', 'production'],
    env: 'NODE_ENV',
    default: 'development',
  },
  logsDir: {
    doc: 'Application logs directory',
    format: String,
    default: `${__dirname}/../../logs`,
  },

  /**
   * JWT config
   */
  jwtConfig: {
    algorithm: {
      doc: 'JWT algorithm',
      format: String,
      default: 'HS256',
    },
    secret: {
      doc: 'JWT secret',
      format: String,
      env: 'JWT_SECRET',
      default: null,
    },
    accessTokenExpiryTime: {
      doc: 'Access token expiry time (in seconds)',
      format: 'int',
      default: 900, // 15 min
    },
    refreshTokenExpiryTime: {
      doc: 'Refresh token expiry time (in seconds)',
      format: 'int',
      default: 3600, // 1 h
    },
  },

  /**
   * SMTP config
   */
  SMTP: {
    host: {
      doc: 'SMTP host',
      format: String,
      env: 'SMTP_HOST',
      default: null,
    },
    port: {
      doc: 'SMTP port',
      format: 'port',
      env: 'SMTP_PORT',
      default: null,
    },
    user: {
      doc: 'SMTP username',
      format: 'email',
      env: 'SMTP_USERNAME',
      default: null,
    },
    pass: {
      doc: 'SMTP password',
      format: String,
      env: 'SMTP_PASSWORD',
      default: null,
    },
  },
});

// Validate current config
config.validate({ allowed: 'strict' });

module.exports = {
  // Export plain config object
  ...config.getProperties(),

  // Export config related aliases
  isTest: env === 'test',
  isProduction: env === 'production',
};
