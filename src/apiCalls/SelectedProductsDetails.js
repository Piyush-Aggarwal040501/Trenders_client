import { server_url } from "../information/backend_url";
export const SelectedProductsDetails = async(query)=>{
    try{
        const res = await fetch(`${server_url}/api/selectedProductsDetails`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                query:query
            })
        });
        let data = await res.json();
        data = data.details;
        return data;
    }catch(err){
        console.log(err);
    }
}