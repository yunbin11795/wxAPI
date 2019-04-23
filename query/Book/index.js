/**
 * Created by 11795 on 2019/4/8.
 */
import {GraphQLObjectType,GraphQLString} from  "graphql";

import {index_banner_type} from './../../type/Book'
import {queryIndexBanner} from './Book'

export default {
    type: index_banner_type,
    args:{
        image:{
            type:GraphQLString,
        },
        bookid:{
            type:GraphQLString,
        },
        createtime:{
            type:GraphQLString,
        }
    },
    resolve:queryIndexBanner
}

