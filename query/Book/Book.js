/**
 * Created by 11795 on 2019/4/22.
 */
import {query} from './../../db'

export async function queryIndexBanner() {
    try{
        let sql= `select * from index_book_banner`;
        return await query(sql);
    }catch(e){
        console.log(e);
    }
}