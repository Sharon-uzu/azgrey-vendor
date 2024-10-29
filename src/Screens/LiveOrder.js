import React,{useState} from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import img from '../assets/Avatar.png'
import img1 from '../assets/Avatar1.png'
import { HiDotsVertical } from "react-icons/hi";
import { BarChart, Bar,PieChart, Pie, XAxis, YAxis, Tooltip, Legend, Cell, LabelList } from 'recharts';

    const data = [
        { day: 'Monday', value: 10 },
        { day: 'Tuesday', value: 11 },
        { day: 'Wednesday', value: 7 },
        { day: 'Thursday', value: 5 },
        { day: 'Friday', value: 8 },
        { day: 'Saturday', value: 3 },
        { day: 'Sunday', value: 9 },
    ];

    const data1 = [
        { week: 'Week1', value: 12 },
        { week: 'Week2', value: 19 },
        { week: 'Week3', value: 3 },
        { week: 'Week4', value: 5 },
        
    ];

    const data2 = [
        { month: 'January', value: 10 },
        { month: 'February', value: 12 },
        { month: 'March', value: 3 },
        { month: 'April', value: 5 },
        { month: 'May', value: 4 },
        { month: 'June', value: 3 },
        { month: 'July', value: 9 },
        { month: 'August', value: 12 },
        { month: 'September', value: 19 },
        { month: 'October', value: 6 },
        { month: 'November', value: 5 },
        { month: 'December', value: 4 },
    ];
  
  
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57', '#8dd1e1', '#000', '#82ADE3', '#e11406', '#FEB800', '#5e5e5e'];


const LiveOrder = () => {

    const [days, setDays] = useState(true)
    const [weeks, setWeeks] = useState(false)
    const [months, setMonths] = useState(false)

    function click1(){
        setDays(true);
        setWeeks(false);
        setMonths(false);
    }

    function click2(){
        setDays(false);
        setWeeks(true);
        setMonths(false);
    }

    function click3(){
        setDays(false);
        setWeeks(false);
        setMonths(true);
    }


    const [newtable, setNewtable] = useState(true)
    const [prepare, setPrepare] = useState(false)
    const [complete, setComplete] = useState(false)
    const [assign, setAssign] = useState(false)

    function showTable1(){
        setNewtable(true);
        setPrepare(false);
        setComplete(false);
        setAssign(false);
    }

    function showTable2(){
        setNewtable(false);
        setPrepare(true);
        setComplete(false);
        setAssign(false);
    }

    function showTable3(){
        setNewtable(false);
        setPrepare(false);
        setComplete(true);
        setAssign(false);
    }

    function showTable4(){
        setNewtable(false);
        setPrepare(false);
        setComplete(false);
        setAssign(true);
    }



    const New = [
        {
            id:1,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            
    
        },
    
        {
            id:2,
            image:img1,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
    
        },
    
        {
            id:3,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
        },
    
        {
            id:4,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
    
        },
    
        {
            id:5,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
    
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
    
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            
    
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
    
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
    
        },
    
        {
            id:11,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
    
        },
    
        {
            id:12,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
    
        }
    ];



    const Preparation = [
        {
            id:1,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            
    
        },
    
        {
            id:2,
            image:img,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
    
        },
    
        {
            id:3,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
        },
    
        {
            id:4,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
    
        },
    
        {
            id:5,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
    
        },
    
        {
            id:6,
            image:img,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
    
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            
    
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
    
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
    
        },
    
        {
            id:11,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
    
        },
    
        {
            id:12,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
    
        }
    ];

    const Completed= [
        {
            id:1,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Ready for delivery'
    
        },
    
        {
            id:2,
            image:img1,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Ready for delivery'
        },
    
        {
            id:3,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Delivery in progress'
        },
    
        {
            id:4,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'Delivered'
        },
    
        {
            id:5,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Delivery in Progress'
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
            status:'Delivery in Progress'
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Ready for delivery'
    
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
            status:'Delivered'
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
            status:'Ready for delivery'
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
            status:'Ready for delivery'
        },
    
        {
            id:11,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            status:'Ready for delivery'
        },
    
        {
            id:12,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
            status:'Delivery in progress'
        }
    ]


    const Assigned = [
        {
            id:1,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            
    
        },
    
        {
            id:2,
            image:img,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
    
        },
    
        {
            id:3,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
        },
    
        {
            id:4,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
    
        },
    
        {
            id:5,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
    
        },
    
        {
            id:6,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
    
        },
        {
            id:7,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
            
    
        },
    
        {
            id:8,
            image:img1,
            name:'Sharon V.',
            time:'2mins ago',
            menu:'Sharwama wrap (x3)',
            location:'Woji Road, Port Harcourt',
            amount:'N30,000',
    
        },
    
        {
            id:9,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Rice and chicken',
            location:'Slaughter Road, Port Harcourt',
            amount:'N80,000',
        },
    
        {
            id:10,
            image:img1,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Meatpie (x4)',
            location:'Woji Road, Port Harcourt',
            amount:'N20,000',
    
        },
    
        {
            id:11,
            image:img,
            name:'Fred Junior',
            time:'2mins ago',
            menu:'Fried rice and chicken (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N100,000',
    
        },
    
        {
            id:12,
            image:img1,
            name:'Daniel Dennar',
            time:'2mins ago',
            menu:'White soup and beef (x2)',
            location:'Woji Road, Port Harcourt',
            amount:'N50,000',
    
        }
    ]


    const getStatusColor = (status) => {
        // Convert status to lowercase for consistent comparison
        const normalizedStatus = status.toLowerCase();
        
        switch (normalizedStatus) {
            case 'ready for delivery':
                return '#FF0000'; // red
            case 'delivery in progress':
                return '#FFC000'; // orange
            case 'delivered':
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
                    <button className={newtable ? 'btn-active' : ''}  onClick={showTable1}>NEW</button>
                    <button className={prepare ? 'btn-active' : ''} onClick={showTable2}>PREPARATION</button>
                    <button className={complete ? 'btn-active' : ''} onClick={showTable3}>COMPLETED</button>
                    <button className={assign ? 'btn-active' : ''} onClick={showTable4}>ASSIGNED</button>

                </div>


                <div className="table">
                    <table>
                        

                        { newtable ? (<>

                            <tr className='t-head'>
                            <th></th>
                            <th>Name</th>
                            <th>Menu</th>
                            <th>Location</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>

                        {
                        New.map((table, id)=>{
                            return(
                            <tr key={id} className='t-row'>
                                <td>
                                    <img src={table.image} alt="image" />
                                </td>
                                <td>
                                    <h4>{table.name}</h4>
                                    <h3>{table.time}</h3>
                                </td>

                                <td>{table.menu}</td>
                                <td>{table.location}</td>
                                <td>{table.amount}</td>
                                <td><HiDotsVertical/></td>
                                                    
                            </tr>
                            )
                            })
                        }

                        </>) : null }


                        { prepare ? (<>

                            <tr className='t-head'>
                                <th></th>
                                <th>Name</th>
                                <th>Menu</th>
                                <th>Location</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>

                            {
                            Preparation.map((table, id)=>{
                                return(
                                <tr key={id} className='t-row'>
                                    <td>
                                        <img src={table.image} alt="image" />
                                    </td>
                                    <td>
                                        <h4>{table.name}</h4>
                                        <h3>{table.time}</h3>
                                    </td>

                                    <td>{table.menu}</td>
                                    <td>{table.location}</td>
                                    <td>{table.amount}</td>
                                    <td><HiDotsVertical/></td>
                                                        
                                </tr>
                                )
                                })
                            }

                            </>) : null }


                            { complete ? (<>

                                <tr className='t-head'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Menu</th>
                                    <th>Location</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>

                                {
                                Completed.map((table, id)=>{
                                    const statusColor = getStatusColor(table.status);

                                    return(
                                    <tr key={id} className='t-row'>
                                        <td>
                                            <img src={table.image} alt="image" />
                                        </td>
                                        <td>
                                            <h4>{table.name}</h4>
                                            <h3>{table.time}</h3>
                                        </td>

                                        <td>{table.menu}</td>
                                        <td>{table.location}</td>
                                        <td>{table.amount}</td>
                                        <td style={{ color: statusColor }}>{table.status}</td>
                                        <td><HiDotsVertical/></td>
                                                            
                                    </tr>
                                    )
                                    })
                                }

                                </>) : null }


                                { assign ? (<>

                                    <tr className='t-head'>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Menu</th>
                                        <th>Location</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>

                                    {
                                    Assigned.map((table, id)=>{
                                        return(
                                        <tr key={id} className='t-row'>
                                            <td>
                                                <img src={table.image} alt="image" />
                                            </td>
                                            <td>
                                                <h4>{table.name}</h4>
                                                <h3>{table.time}</h3>
                                            </td>

                                            <td>{table.menu}</td>
                                            <td>{table.location}</td>
                                            <td>{table.amount}</td>
                                            <td><HiDotsVertical/></td>
                                                                
                                        </tr>
                                        )
                                        })
                                    }

                                    </>) : null }

                    </table>
                </div>
              </div>


              <div className="right">

                

                <div className="stats">
                    <h2>Statistics</h2>
                    <div className="stat">
                        <h3>Pending</h3>
                        <h4>06</h4>
                    </div>

                    <div className="stat">
                        <h3>Accepted</h3>
                        <h4>04</h4>
                    </div>

                    <div className="stat">
                        <h3>Declined</h3>
                        <h4>07</h4>
                    </div>

                    <div className="stat">
                        <h3>Delivered</h3>
                        <h4>08</h4>
                    </div>

                    <div className="stat stat1">
                        <h3>Total Orders</h3>
                        <h4>25</h4>
                    </div>

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

export default LiveOrder