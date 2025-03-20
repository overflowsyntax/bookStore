import bookStore from "../model/bookStore.js"

export async function listData (){
    const data =await bookStore.find()
    return data
}

