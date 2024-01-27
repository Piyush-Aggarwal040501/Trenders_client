import { server_url } from "../information/backend_url";
export const GetAllOrdersForAdmin = async (filters)=>{
    try{
        const res = await fetch(`${server_url}/api/allOrders`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({filters})
        })
        const {orders} = await res.json();
        return orders;
    }catch(err){
        console.log(err);
    }
    
}