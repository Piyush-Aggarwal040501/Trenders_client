import { server_url } from "../information/backend_url";
export const SignupRequest = async(email,password,sendedOtp,otp)=>{
    try{
        const res = await fetch(`${server_url}/api/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:email,password:password,sendedOtp:sendedOtp,otp:otp
            })
        });
        let data = await res;
        return data;
    }catch(err){
        console.log(err);
    }
}