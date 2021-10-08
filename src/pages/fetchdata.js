import axios from 'axios';

const fetchData = async(url) =>{
 try{
    let data = await axios(url);
    return data;
 } catch(e){
     console.log(e);
 }
  
}

export default fetchData; 