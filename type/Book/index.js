/**
 * Created by 11795 on 2019/4/22.
 */
import {GraphQLObjectType,GraphQLString,GraphQLList} from  "graphql";

export const index_banner_type=new GraphQLList(new GraphQLObjectType({
    name:'index_banner_type',
    fields: ()=>({
        image:{
            type:GraphQLString,
            description:"图片",
            name:"image"
        },
        bookid:{
            type:GraphQLString,
            description:"图片id",
            name:"bookid"
        },
        createtime:{
            type:GraphQLString,
            description:"创建时间",
            name:"createtime"
        }
    })
}));