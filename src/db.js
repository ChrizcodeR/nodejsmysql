import {createPool} from "mysql2/promise";

export const pool  =  createPool({
    user: 'root',
    password: 'gC5BHchacC2cDFEe2eGfdecCA36bEB-4',
    host: 'viaduct.proxy.rlwy.net',
    database: 'railway',
    port: 35751 
 
})

