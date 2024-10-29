import React from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import { HiDotsVertical } from "react-icons/hi";


const Delivery = () => {

    const New = [
        {
            id:1,
            code:'XY234',
            name:'Dennar',
            meal:'Pizza',
            total:'N30,000',
            status:'Complete',
            
    
        },
    
        {
            id:2,
            code:'XY234',
            name:'Tracy',
            meal:'Rice',
            total:'N30,000',
            status:'Complete',
    
        },
    
        {
            id:3,
            code:'XY234',
            name:'Dennar',
            meal:'Pizza',
            total:'N8,000',
            status:'In Progress',
        },
    
        {
            id:4,
            code:'XY234',
            name:'Fortune',
            meal:'Bread',
            total:'N10,000',
            status:'Complete',
    
        },

        {
            id:5,
            code:'XY234',
            name:'Fortune',
            meal:'Bread',
            total:'N10,000',
            status:'In Progress',
    
        },

        {
            id:6,
            code:'XY234',
            name:'Fortune',
            meal:'Bread',
            total:'N10,000',
            status:'In Progress',
    
        },
    
    ];

    const getStatusColor = (status) => {
        // Convert status to lowercase for consistent comparison
        const normalizedStatus = status.toLowerCase();
        
        switch (normalizedStatus) {
            case 'complete':
                return '#24D720'; // green
            case 'in progress':
                return '#FFC000'; // orange
            
            default:
                return '#000'; // Default color
        }
    };
    


  return (
   <div className='dashb'>
       

        <section className='dashboard'>

          <MainSidebar/>

          <main>
          <MainHeader/>

          <section className='main-division'>

              <div className="left">


                <div className="table">
                    {/* <h5>RECENT ORDER</h5> */}
                    <table>

                            <tr className='t-head'>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Meal</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th><HiDotsVertical/></th>
                            </tr>

                            {
                            New.map((table, id)=>{

                                const statusColor = getStatusColor(table.status);


                                return(
                                <tr key={id} className='t-row'>
        
                                    <td>
                                        <h4>{table.code}</h4>
                                    </td>

                                    <td>{table.name}</td>
                                    <td>{table.meal}</td>
                                    <td>{table.total}</td>
                                    <td style={{ color: statusColor }}>{table.status}</td>
                                    <td>View</td>
                                                        
                                </tr>
                                )
                                })
                            }

                    </table>

                    


                </div>
              </div>

          </section>

          </main>
        
        </section>


    </div>
  )
}

export default Delivery