import { server_url } from "../information/backend_url";
export const inTrendingAndSpecialOffersAction = ()=>{
    return async (dispatch)=>{
        try{

            dispatch({
                type:'inTrendingAndSpecialOffersRequest'
            })
            const res = await fetch(`${server_url}/api/inTrendingAndSpecialOffers`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "content-Type":"application/json"
                },
                Credential:'include'
            });
            const {data} = await res.json();
            if(res.status==200){
                dispatch({
                    type:'inTrendingAndSpecialOffersSuccess',
                    payload:data
                })
            }else{
                dispatch({
                    type:'inTrendingAndSpecialOffersFail',
                })
            }
        }catch(err){
            dispatch({
                type:'inTrendingAndSpecialOffersFail',
            })
        }
    }
}

