import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";
import Graph from './Graph'
//
//
//  function ffg(){
//      // const[data,setData] = useState();
//      // const [openi,setOpeni] = useState([]);
//      // const [close,setClose] = useState([]);
//      // const [ high,setHigh] = useState([]);
//      // const [ low,setLow] = useState([]);
//      // const [ date,setDate] = useState([]);
//      // const [ span,setSpan] = useState(30);
//      // useEffect(() => {
//      //     const getdata = async() =>
//      //     {
//      //         let res = await axios.get('http://localhost:3000/api/stock/getstock/stock=bse/span=30')
//      //         res = res.data.stock;
//      //         let arr1=[],arr2=[],arr3=[],arr4=[],arr5=[];
//      //         for(let i=0;i<span;i++)
//      //         {
//      //             arr1.push(res[i].Open);
//      //             arr2.push(res[i].Close);
//      //             arr3.push(res[i].Low);
//      //             arr4.push(res[i].High);
//      //             arr5.push(res[i].Date);
//      //         }
//      //         setOpeni(arr1)
//      //         setClose(arr2)
//      //         setLow(arr3)
//      //         setHigh(arr4)
//      //         setDate(arr5)
//      //
//      //     }
//      //     getdata();
//      //
//      // },[]);
//
//      return(
//         <>
//             <Typography color="inherit" variant="h5" component="h1">
//                 Bse
//             </Typography>
//         </>
//     )
// }
//
// export default ffg

// import Typography from "@mui/material/Typography";


function ffg(){

    const[data,setData] = useState();
     const [openi,setOpeni] = useState([]);
     const [close,setClose] = useState([]);
     const [ high,setHigh] = useState([]);
     const [ low,setLow] = useState([]);
     const [ date,setDate] = useState([]);
     const [ span,setSpan] = useState(30);

     useEffect(() => {
         const getdata = async() =>
         {
              await axios.get('http://localhost:3000/api/stock/getstock/stock=bse/span=30')
                 .then((res)=>{  res = res.data.stock;
                     setData(res)
                     let arr1=[],arr2=[],arr3=[],arr4=[],arr5=[];
                     for(let i=0;i<span;i++)
                     {
                         arr1.push(res[i].Open);
                         arr2.push(res[i].Close);
                         arr3.push(res[i].Low);
                         arr4.push(res[i].High);
                         arr5.push(res[i].Date);
                     }
                     setOpeni(arr1)
                     setClose(arr2)
                     setLow(arr3)
                     setHigh(arr4)
                     setDate(arr5)})
         }
         getdata();

     },[]);
if(data)
    return(
        <>
            <Typography color="inherit" variant="h5" component="h1">
                <Graph x={data}/>
            </Typography>
        </>
    )
else
    return (<div></div>)
}


export default ffg