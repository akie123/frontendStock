import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
function Charts(props)
{


    return(
    <div className="container-fluid">
       <div className="row">
          <div className="col-9">
              <div style={{marginTop:"0px",width:'3000px',height:'600px'}}> <Line data ={props.chartData}/>
              </div>
          </div>
           <div className="col-3" style={{padding:"2%"}}>
               <table className="table table-striped">
                   <thead>
                   <tr>

                       <th scope="col">Date</th>
                       <th scope="col">Volume</th>


                   </tr>
                   </thead>
                   <tbody>
                   {
                      props.volume.slice(0, 7).map((res) => <tr>

                          <td>{res.Date}</td>
                          <td>{res.Volume}</td>
                          </tr>)
                   }
                   </tbody>
               </table>
           </div>

       </div>
    </div>

        )
}
export default Charts;