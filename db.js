/**
 * Created by 11795 on 2019/4/22.
 */

import mysql from 'mysql';

const db=mysql.createConnection({
    host:"47.107.247.199",
    port:3306,
    database:"wxAPI",
    user:"root",
    password:"123456"
});


export const query=(sql,data)=>{
    return new Promise((resolve,reject)=>{
        db.query(sql,data,(err,result,fields)=>{
            if(err){
                reject(err);
            }else {
                resolve(result);
                console.log(result)
            }

        })
    })
};

export default db;
