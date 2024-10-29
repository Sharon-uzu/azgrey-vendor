import React,{useState} from 'react'
import MainSidebar from '../Components/MainSidebar'
import MainHeader from '../Components/MainHeader'
import { Link } from 'react-router-dom'
import { FaBars} from "react-icons/fa";
import logo from '../assets/20230525_150752.png';
// import logo2 from '../Assets/logo2.png'
import { RiLogoutBoxRLine } from "react-icons/ri";
import {BsFillBagFill} from "react-icons/bs"
import { FaUserAlt} from "react-icons/fa";
import {ImSpinner10}from "react-icons/im"
import {GiCubes} from "react-icons/gi"
import {TbTruckDelivery} from "react-icons/tb"
import {SlSettings} from "react-icons/sl"
import { MdDashboard } from "react-icons/md";
import { BarChart, Bar,PieChart, Pie, XAxis, YAxis, Tooltip, Legend, Cell, LabelList } from 'recharts';

// import Chart from 'react-apexcharts';

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

const data3 = [
    { user: 'Customer', value: 52 },
    { user: 'Vendor', value: 28 },
    { user: 'Rider', value: 13 },
    
];



const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57', '#8dd1e1', '#000', '#82ADE3', '#e11406', '#FEB800', '#5e5e5e'];


const Dashboard = () => {

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



  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <MainSidebar/>

          <main>
          <MainHeader/>

          <section className='main-division'>

            <div className="left">


                <div className="first">

                    <div className="first-l">
                        <div className="first-l-cards">

                        <Link to='/order' className="first-l-card" style={{ backgroundColor: '#FFE2E5', wordWrap: "break-word" }}>
                            <div>
                                <span style={{ backgroundColor: '#FA5A7D' }}>
                                <BsFillBagFill className='c-i' />
                                </span>
                                <h2>18+</h2>
                                <h6>Live Order</h6>
                            </div>

                        </Link>

                        <Link to='/rider' className="first-l-card" style={{ backgroundColor: '#FFF4DE' }}>
                            <div>
                                <span style={{ backgroundColor: '#FF947A' }}>
                                <FaUserAlt className='c-i' />
                                </span>
                                <h2>7+</h2>
                                <h6>Rider</h6>
                            </div>
                        </Link>

                        <Link to='/activity' className="first-l-card" style={{ backgroundColor: '#DCFCE7' }}>
                            <div>
                                <span style={{ backgroundColor: '#3CD856' }}>
                                <ImSpinner10 className='c-i' />
                                </span>
                                <h2>20+</h2>
                                <h6>Order Activity</h6>

                            </div>
                        </Link>


                        <Link to='/product' className="first-l-card" style={{ backgroundColor: '#F3E8FF' }}>
                            <div>
                                <span style={{ backgroundColor: '#BF83FF' }}>
                                <GiCubes className='c-i' />
                                </span>
                                <h2>200+</h2>
                                <h6>Products</h6>
                            </div>
                        </Link>

                        <Link to='/delivery' className="first-l-card" style={{ backgroundColor: '#FFE2E5' }}>
                            <div>
                                <span style={{ backgroundColor: '#FA5A7D' }}>
                                <TbTruckDelivery className='c-i' />
                                </span>
                                <h2>500+</h2>
                                <h6>Delivery</h6>
                            </div>
                        </Link>

                        <Link to='/settings' className="first-l-card" style={{ backgroundColor: '#FFF4DE' }}>
                            <div>
                                <span style={{ backgroundColor: '#FF947A' }}>
                                <SlSettings className='c-i' />
                                </span>
                                <h6>Settings</h6>
                            </div>
                        </Link>

                </div>

                </div>

            </div>



                    
            <div className="analytics">

                <div className="analytics-l analytics-l1">
                    <div className="graph-rep">
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
                    <BarChart width={500} height={300} data={data}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>

                    </>) : null }

                    {
                        weeks ? (<>
                    <BarChart width={500} height={300} data={data1}>
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
                        <BarChart width={500} height={300} data={data2}>
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


                </div>
                </div>

                <div className="analytics-l">
                    <div className="graph-rep">
                        <h2>Review</h2>
                    <PieChart width={500} height={300}>
                        <Pie
                            data={data3}
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            innerRadius={68}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="user"
                        >
                            {data3.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <LabelList dataKey="user" position="inside" />
                        </Pie>
                        <Tooltip />
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>

                    

                </div>
                    
                </div>

            </div>
                    

        </div>



          </section>

          </main>
        
        </section>


    </div>
  )
}

export default Dashboard