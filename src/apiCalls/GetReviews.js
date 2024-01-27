import { server_url } from "../information/backend_url";
export const GetReviews = async(productName,productBrand)=>{
    try{
        const res = await fetch(`${server_url}/api/getReviews`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                productName:productName,productBrand:productBrand
            })
        });
        let data = await res.json();
        data = data.details;
        return data;
    }catch(err){
        console.log(err);
    }
}