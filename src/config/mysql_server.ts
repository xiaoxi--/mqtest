let mysqlServer: any = {};

let options:any = {
  dialect: 'mysql',
  logging: false,
  force: true,
  timezone: '+08:00', //改为标准时区
  baseDir: 'modelsql', // change default dir model to modelsql
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  define: {
    timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
  }
}

if (process.env.NODE_ENV === 'dev') {
  mysqlServer = {
    host: 'localhost',
    username: 'root',
    password: '123456',
    database: 'xc_bzy',
    port: 3306,
    ...options
  };
} else if (process.env.NODE_ENV === 'test') {
  mysqlServer = {
    host: '47.92.94.8',
    username: 'root',
    password: 'QWD@20210907',
    database: 'xc_bzy',
    port: 3307,
    ...options
  };
} else if (process.env.NODE_ENV === 'docker') {
  mysqlServer = {
    host: 'bzy-mysql',
    username: 'bzyadmin',
    password: process.env.MYSQL_PASSWORD,
    database: 'xc_bzy',
    port: 3306,
    ...options
  };
}

export default mysqlServer;
