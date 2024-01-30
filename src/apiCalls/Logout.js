import { server_url } from "../information/backend_url";
export const Logout = async ()=>{
   localStorage.removeItem("trenders-user");
}