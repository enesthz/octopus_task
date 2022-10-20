import { useEffect, useState } from "react"
import assetsObject from './task.json'

let assetsArray = Object.values(assetsObject);
console.log(assetsArray)

function Window(){
    const [asset, setAsset] = useState(0);   
     
    let assetElement;

    if(assetsArray[asset].type === "video"){
        assetElement = <video src={assetsArray[asset].url} autoPlay muted></video>
    }else{
        assetElement = <img src = {assetsArray[asset].url}></img>
    }

    useEffect(() =>{
        changeAsset();
    });


    function changeAsset(){
        setTimeout(() => {
            if(asset + 1 < assetsArray.length){
                setAsset(asset + 1)
            }else{
                setAsset(0)
            }
        },assetsArray[asset].durationInSec * 1000);
    }

    return(
        <div>
            {assetElement}
        </div>
    )
};

export default Window