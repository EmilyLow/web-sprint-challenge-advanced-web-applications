import {axiosWithAuth} from "../utils/axiosWithAuth";

export const fetchColors = () => {
    console.log("Fetch colors called");
   return axiosWithAuth()
    .get("/colors")
    .then( res => {
        console.log("Fetch colors then", res);
        return res;
    });

};

export default fetchColors;