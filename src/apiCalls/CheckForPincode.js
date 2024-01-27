import { server_url } from "../information/backend_url";
export const CheckForPincode = async(productId,pin)=>{
    try{
        const res = await fetch(`${server_url}/api/checkForPincode`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                productId:productId,pin:pin
            })
        });
        let data = await res.json();
        data = data.check;
        return data;
    }catch(err){
        console.log(err);
    }
}