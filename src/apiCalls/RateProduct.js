import { server_url } from "../information/backend_url";
export const RateProduct = async(email,productName,productBrand,userName,comment,rating)=>{
    try{
        const res = await fetch(`${server_url}/api/rateProduct`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email,productName,productBrand,userName,comment,rating
            })
        });
       return res;
    }catch(err){
        console.log(err);
    }
}