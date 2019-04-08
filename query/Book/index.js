/**
 * Created by 11795 on 2019/4/8.
 */

import {GraphQLString} from 'graphql';

export default   {
    type: GraphQLString,
    resolve() {
        return 'world';
    },
}