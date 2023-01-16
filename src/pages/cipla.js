import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";
import Graph from "./Graph";

function ffg(){
    const[data,setData] = useState();
    useEffect(() => {
        const getdata = async() => {
            await axios.get('https://back123-q87o.onrender.com/api/stock/getstock/stock=cipla/span=30')
                .then((res) => {
                    res = res.data.stock;
                    setData(res)
                })
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