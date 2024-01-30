import { server_url } from "../information/backend_url";
export const userDetailsAction = ()=>{
    return async (dispatch)=>{
        try{

            dispatch({
                type:'userDetailsRequest'
            })
            let token = localStorage.getItem("trenders-user");
            // let token = "abc";
            const res = await fetch(`${server_url}/api/userDetails`,{
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify({
                    token:token
                })
            });
            const {data} = await res.json();
            if(res.status==200){
                dispatch({
                    type:'userDetailsSuccess',
                    payload:data
                })
            }else if(res.status==401){
                dispatch({
                    type:'userDetailsNotRegestered'
                })
            }else{
                dispatch({
                    type:'userDetailsFail',
                })
            }
        }catch(err){
            dispatch({
                type:'userDetailsFail',
            })
        }
    }
}

