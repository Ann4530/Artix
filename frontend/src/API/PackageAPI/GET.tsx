import axios from 'axios'
import { Package } from '../../Interfaces/Package';

const packageUrl = `https://localhost:7233/api/Package`

export async function GetPackage() {
    try{
        let packList:Package[] = await axios.get(packageUrl).then(response => response.data)
        return packList
        
    }catch(err){
      console.log(err)
    }
  }
