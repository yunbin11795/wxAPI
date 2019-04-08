/**
 * Created by 11795 on 2019/4/7.
 */
import express from 'express';
import graphqlHTTP  from 'express-graphql'
import {schema} from './schema'
let app = express();
let PORT = 3000;


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}));

let server = app.listen(PORT, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log(server.address());
    console.log('GraphQL listening at http://%s:%s', host, port);
});