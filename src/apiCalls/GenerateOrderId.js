import { server_url } from "../information/backend_url";
export const GenerateOrderId = async(amount)=>{
    try{
        const res = await fetch(`${server_url}/api/generateOrderId`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({amount})
        });
        const {order} = await res.json();
        return order;
    }catch(err){
        console.log(err);
    }
}