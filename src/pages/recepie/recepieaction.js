import recepieactiontype from './recepietype'

export const uservalid = ()=>({
    type:recepieactiontype.USERVALID
})
export const userinvalid = (data)=>({
    type:recepieactiontype.USERINVALIDC,
    payload:data
})
export const adminvalid = ()=>({
    type:recepieactiontype.ADMINVALID
})
export const admininvalid = (data)=>({
    type:recepieactiontype.ADMININVALIDC,
    payload:data
})


export const fetchdataaction = (data)=>({
    type:recepieactiontype.USER_FETCH_DATA,
    payload:data
})

export const userlogIn = (item)=>({
    type:recepieactiontype.USERLOGIN,
    payload:item
})
export const adminlogIn = (item)=>({
    type:recepieactiontype.ADMINLOGIN,
    payload:item
})

export const useraddcart = (item)=>({
    type:recepieactiontype.USERADDCART,
    payload:item
})

