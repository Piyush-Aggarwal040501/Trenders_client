import { server_url } from "../information/backend_url";
export const Logout = async ()=>{
    const res = await fetch(`${server_url}/api/logout`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "content-Type":"application/json"
        },
        Credentials:'include'
    })
    if(res.status==200){
        window.location.reload();
    }else{
        window.alert("some problem in logout");
    }
}