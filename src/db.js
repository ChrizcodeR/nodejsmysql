import { createPool } from "mysql2/promise";

export const database =  createPool({
    user: 'root',
    password: 'gC5BHchacC2cDFEe2eGfdecCA36bEB-4',
    host: 'viaduct.proxy.rlwy.net',
    db: 'railway',
    port: 35751 
 
})

