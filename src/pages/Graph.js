import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import Charts from './Chart'


import axios from 'axios'

function Graph(props) {
    const navigate=useNavigate();
    const [userData,setUserData] = useState();

    const getdata = async()=> {

        setUserData(
            {
                labels: props.x.map((res) => res.Date),
                datasets: [
                     {
                    label: "Opening", data: props.x?.map((res) => res.Open),
                    backgroundColor: ['blue', 'orange'],
                    borderColor: ["blue"],
                    borderWidth: 2,
                     },
                    {
                        label: "Closing", data: props.x?.map((res) => res.Close),
                        backgroundColor: ['blue', 'orange'],
                        borderColor: ["red"],
                        borderWidth: 2,
                    }
                    ,
                    {
                        label: "High", data: props.x?.map((res) => res.High),
                        backgroundColor: ['black', 'violet'],
                        borderColor: ["violet"],
                        borderWidth: 2,
                    }
                    ,
                    {
                        label: "Low", data: props.x?.map((res) => res.Low),
                        backgroundColor: ['black', 'violet'],
                        borderColor: ["black"],
                        borderWidth: 2,
                    }
                ],
            })
    }
    useEffect(()=>{
        getdata();
    },[]);

        return (
            <>
                {/* <img src='./stock.jpg' style={{marginTop:"60px"}}alt="MainImage" /> */}
                <div>
                    {/*<h1>{userData.labels[0]}</h1>*/}
                    {userData && <Charts chartData={userData} volume = {props.x}/>}
                </div>
                {/* <Footer/> */}
            </>
        )


}

export default Graph;
