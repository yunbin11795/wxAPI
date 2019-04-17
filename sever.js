/**
 * Created by 11795 on 2019/4/7.
 */
import express from 'express';
import graphqlHTTP  from 'express-graphql'
import {schema} from './schema'
let app = express();
let PORT = 3000;
import https from 'https'
import fs from 'fs';

let option={
    key:fs.readFileSync('./ssl/2026737.key'),
    cert:fs.readFileSync('./ssl/2026797.pem'),
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}));

// let server = app.listen(PORT, function() {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log(server.address());
//     console.log('GraphQL listening at http://%s:%s', host, port);
// });
let server=https.createServer(option,app).listen(PORT,function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log(server.address());
    console.log('GraphQL listening at https://%s:%s', host, port);
});