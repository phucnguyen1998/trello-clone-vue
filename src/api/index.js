import axios from 'axios';

import * as urlConst from '../constants/urlConst'

export default class Api {
    static async getAllBoard(){
        return await axios.get(urlConst.baseURL+urlConst.getAllBoard,
            {
                headers: {}
            }
        )
    }

    static async addBoard(body){
        return await axios.post(urlConst.baseURL + `/api/board`,body,{
            headers:{}
        })
    }

    static async getBoardById(id){
        return await axios.get(urlConst.baseURL+`/api/board/${id}`,
            {
                headers: {}
            }
        )
    }

    static async addListByIdBoard(idBoard,body){
        return await axios.post(urlConst.baseURL + `/api/board/${idBoard}/list`,body,{
            headers:{}
        })
    }

    static async addCardByIdList(idList,body){
        return await axios.post(urlConst.baseURL + `/api/list/${idList}/card`,body,{
            headers:{}
        })
    }

    static async deleteListById(id){
        return await axios.delete(urlConst.baseURL + `/api/list/${id}`,{
            headers:{}
        })
    }

    static async deleteCardById(id){
        return await axios.delete(urlConst.baseURL+`/api/card/${id}`,{
            headers:{}
        })
    }
}