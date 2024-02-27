import {createPool} from "mysql2/promise";

export const pool  =  createPool({
    user: 'root',
    password: 'gC5BHchacC2cDFEe2eGfdecCA36bEB-4',
    host: 'viaduct.proxy.rlwy.net',
    database: 'railway',
    port: 35751 
 
})

/* todo siempre estuvo en la documentacion las variables de conexion no se
pueden cambiar es decir

import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test', esta variabe jamas se debe cambiar ese era el error.
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

*/
