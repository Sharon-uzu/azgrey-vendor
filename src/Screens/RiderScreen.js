import React,{useState} from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import img from '../assets/Avatar.png'
import img1 from '../assets/Avatar1.png'
import { HiDotsVertical } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";


const RiderScreen = () => {

    const [available, setAvailable] = useState(true)
    const [assigned, setAssigned] = useState(false)
    const [complete, setComplete] = useState(false)
    const [delivery, setDelivery] = useState(false)

    function showTable1(){
        setAvailable(true);
        setAssigned(false);
        setComplete(false);
        setDelivery(false);
    }

    function showTable2(){
        setAvailable(false);
        setAssigned(true);
        setComplete(false);
        setDelivery(false);
    }

    function showTable3(){
        setAvailable(false);
        setAssigned(false);
        setComplete(false);
        setDelivery(true);
    }

    function showTable4(){
        setAvailable(false);
        setAssigned(false);
        setComplete(true);
        setDelivery(false);
    }



    const Available= [
        {
            id:1,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Active'
    
        },
    
        {
            id:2,
            image:img1,
            name:'Sharon V.',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Active'
        },
    
        {
            id:3,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Pending'
        },
    
        {
            id:4,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'In progress'
        },
    
        {
            id:5,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Pending'
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            code:'ABK765Y',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
            status:'In Progress'
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'In Progress'
    
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Active'
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Active'
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'Pending'
        },

    ]

    const Assigned= [
        {
            id:1,
            image:img1,
            name:'Sharon A.',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Active'
    
        },
    
        {
            id:2,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Active'
        },
    
        {
            id:3,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Pending'
        },
    
        {
            id:4,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'In progress'
        },
    
        {
            id:5,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Pending'
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            code:'ABK765Y',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
            status:'In Progress'
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'In Progress'
    
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Active'
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Active'
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'Pending'
        },

    ]

    

    const Delivery= [
        {
            id:1,
            image:img1,
            name:'Sharon A.',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Active',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:2,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Active',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:3,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Pending',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:4,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'In progress',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:5,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Pending',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            code:'ABK765Y',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
            status:'In Progress',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'In Progress',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Active',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Active',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'Pending',
            rider:'Abel Y.',
            date:'02-7-2024',
            time:'12:03pm'
        },

    ]

    



    const Complete= [
        {
            id:1,
            image:img1,
            name:'Sharon A.',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            rider:'Abel Y.',
            time:'1 mins ago'
        },
    
        {
            id:2,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            rider:'Abel Y.',
            time:'3 mins ago'
        },
    
        {
            id:3,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            rider:'Abel Y.',
            time:'3 mins ago'
        },
    
        {
            id:4,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            rider:'Abel Y.',
            time:'7 mins ago'
        },
    
        {
            id:5,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            rider:'Abel Y.',
            time:'12 mins ago'
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            code:'ABK765Y',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
            rider:'Abel Y.',
            time:'13 mins ago'
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            rider:'Abel Y.',
            time:'15 mins ago'
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            code:'ABK765Y',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            rider:'Abel Y.',
            time:'20 mins ago'
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            rider:'Abel Y.',
            time:'23 mins ago'
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            code:'ABK765Y',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            rider:'Abel Y.',
            time:'1 hour ago'
        },

    ]
    

    

    const getStatusColor = (status) => {
        // Convert status to lowercase for consistent comparison
        const normalizedStatus = status.toLowerCase();
        
        switch (normalizedStatus) {
            case 'pending':
                return '#FF0000'; // red
            case 'in progress':
                return '#FFC000'; // orange
            case 'active':
                return '#24D720'; // green
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

                <div className="cards">
                    <button className={available ? 'btn-active' : ''}  onClick={showTable1}>AVAILABLE RIDERS</button>
                    <button className={assigned ? 'btn-active' : ''} onClick={showTable2}>ASSIGNED RIDERS</button>
                    <button className={delivery ? 'btn-active' : ''} onClick={showTable3}>DELIVERY IN PROGRESS</button>
                    <button className={complete ? 'btn-active' : ''} onClick={showTable4}>COMPLETED DELIVERY</button>

                </div>


                <div className="table">
                    <table className='rider-table'>


                        { available ? (<>


                            {
                            Available.map((table, id)=>{
                                const statusColor = getStatusColor(table.status);

                                return(
                                <tr key={id} className='t-row'>
                                    <td>
                                        <img src={table.image} alt="image" />
                                    </td>
                                    <td>
                                        <h4>{table.name}</h4>
                                        <h3>{table.code}</h3>
                                    </td>

                                    <td className='rank-c'><span style={{color:'Rank:', marginRight:'5px'}}>Rank:</span> < FaStar className='rank'/><FaStar className='rank'/><FaStar className='rank'/><FaStar className='rank'/><FaStar className='rank'/></td>
                                    <td style={{color:'#e11406'}}>Call</td>
                                    <td style={{color:'#e11406'}}>View</td>
                                    <td style={{ color: statusColor }}>{table.status}</td>
                                    <td><HiDotsVertical/></td>
                                                        
                                </tr>
                                )
                                })
                            }

                            </>) : null }


                            { assigned ? (<>


                            {
                            Assigned.map((table, id)=>{
                                const statusColor = getStatusColor(table.status);

                                return(
                                <tr key={id} className='t-row'>
                                    <td>
                                        <img src={table.image} alt="image" />
                                    </td>
                                    <td>
                                        <h4>{table.name}</h4>
                                        <h3>{table.code}</h3>
                                    </td>

                                    <td className='rank-c'><span style={{color:'Rank:', marginRight:'5px'}}>Rank:</span> < FaStar className='rank'/><FaStar className='rank'/><FaStar className='rank'/><FaStar className='rank'/><FaStar className='rank'/></td>
                                    <td style={{color:'#e11406'}}>Call</td>
                                    <td style={{color:'#e11406'}}>View</td>
                                    <td style={{ color: statusColor }}>{table.status}</td>
                                    <td><HiDotsVertical/></td>
                                                        
                                </tr>
                                )
                                })
                            }

                            </>) : null }

                        

                        { delivery ? (<>

                            <tr className='t-head' style={{backgroundColor:'#82ADE3'}}>
                            <th></th>
                            <th>Name</th>
                            <th>Menu</th>
                            <th>Location</th>
                            <th>Amount</th>
                            <th>Rider</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>

                        {
                        Delivery.map((table, id)=>{
                            return(
                            <tr key={id} className='t-row'>
                                <td>
                                    <img src={table.image} alt="image" />
                                </td>

                                <td>{table.name}</td>

                                <td>{table.menu}</td>
                                <td>{table.location}</td>
                                <td>{table.amount}</td>
                                <td>
                                    <h4>{table.rider}</h4>
                                    <h3>{table.code}</h3>
                                </td>
                                <td>{table.status}</td>
                                <td>{table.date}</td>
                                <td>{table.time}</td>
                                                    
                            </tr>
                            )
                            })
                        }

                        </>) : null }


                        { complete ? (<>

                            <tr className='t-head' style={{backgroundColor:'#82ADE3'}}>
                                <th></th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Menu</th>
                                <th>Location</th>
                                <th>Amount</th>
                                <th>Rider</th>
                            </tr>

                            {
                           Complete.map((table, id)=>{
                            return(
                            <tr key={id} className='t-row'>
                                <td>
                                    <img src={table.image} alt="image" />
                                </td>
                                <td>
                                    <h4>{table.name}</h4>
                                    <h3>{table.time}</h3>
                                </td>
                                <td>{table.code}</td>

                                <td>{table.menu}</td>
                                <td>{table.location}</td>
                                <td>{table.amount}</td>
                                <td>{table.rider}</td>
                                                    
                            </tr>
                            )
                            })
                            }

                            </>) : null }

                    </table>
                </div>
              </div>


              <div className="right">

                

                <div className="stats stat-r">
                    <h2>Statistics</h2>
                    <div className="stat">
                        <h3>Total Rider</h3>
                        <h4>06</h4>
                    </div>

                    <div className="stat">
                        <h3>Active Rider</h3>
                        <h4>04</h4>
                    </div>

                    <div className="stat">
                        <h3>Riders on Delivery</h3>
                        <h4>07</h4>
                    </div>

                    {/* <div className="stat">
                        <h3>Delivered</h3>
                        <h4>08</h4>
                    </div>

                    <div className="stat stat1">
                        <h3>Total Orders</h3>
                        <h4>25</h4>
                    </div> */}

                </div>

                {/* <div className="graph-rep">
                    <h2>GROWTH 
                        <span className='period'>
                            <span className={days ? 'active-p' : ''} onClick={click1}>Days</span>
                            <span onClick={click2} className={weeks ? 'active-p' : ''}>Weeks</span>
                            <span onClick={click3} className={months ? 'active-p' : ''}>Months</span>
                        </span>
                    </h2>

                    <div>

                    {
                       days ? (<>
                    <PieChart width={400} height={350}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="day"
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <LabelList dataKey="day" position="inside" />
                        </Pie>
                        <Tooltip />
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>

                    </>) : null }

                    {
                        weeks ? (<>
                    <BarChart width={420} height={250} data={data1}>
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value">
                            {data1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                    </>) : null }           


                    {
                        months ? (<>
                        <BarChart width={420} height={250} data={data2}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value">
                            {data2.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                    </>) : null }



                    </div>
                </div> */}

              </div>



          </section>

          </main>
        
        </section>


    </div>
  )
}

export default RiderScreen