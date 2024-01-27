import { server_url } from "../information/backend_url";
export const OrdersRequest = async(details)=>{
    try{
        const res = await fetch(`${server_url}/api/order`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({details})
        });
        return res;
    }catch(err){
        console.log(err);
    }
}