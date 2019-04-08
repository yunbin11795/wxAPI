/**
 * Created by 11795 on 2019/4/7.
 */
import {GraphQLObjectType,GraphQLSchema} from 'graphql'
import query from './query'
import mutation from './mutation'

const RootQueryType = new GraphQLObjectType(
    {
    name: 'RootQueryType',
    fields: query
});

const RootMutationType = new GraphQLObjectType(
    {
        name: 'RootMutationType',
        fields: mutation
    });


export const schema=new GraphQLSchema({
    query: RootQueryType,
    mutation:RootMutationType
});