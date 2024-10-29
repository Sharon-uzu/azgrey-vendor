import React from "react";
import VendorsCharts, { DailyChart, MonthlyOrdersChart } from "../../Components/ChartJs/AdminCharts";



const AdminReport = () => {

  const [chartDays, setChartDays] = React.useState("Week");

  const changeDays = (e) => {
    setChartDays(e.target.value);
  };

  return (
    <div className='grid grid-cols-2 mt-2 '>
      {/* First container */}
      <div className=' h-72 flex flex-col justify-between'>
        <h3 className='ml-12 text-3xl '>Statistics</h3>
        <div className="flex  flex-wrap  justify-center gap-x-4 h-60 ">
          <div
            style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
            className="w-1/4 h-24 grid place-items-center  rounded-xl shadow-md"
          >
            <span className="text-lg">Accepted</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              02
            </span>
          </div>
          <div
            style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
            className="w-1/4 h-24  grid place-items-center   rounded-xl shadow-md"
          >
            <span className="text-lg"> Declined</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              05
            </span>
          </div>
          <div
            style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
            className="w-1/4 h-24  grid place-items-center   rounded-xl shadow-md"
          >
            <span className="text-lg"> Pending</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              05
            </span>
          </div>
          <div
            style={{ background: "hsla(0, 63%, 89%, 0.6)" }}
            className="w-10/12 h-24  grid place-items-center   rounded-xl shadow-md"
          >
            <span className="text-lg">Total orders</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              120,000
            </span>
          </div>
        </div>

      </div>
      {/* Second container */}
      <div className=' h-72 flex flex-col justify-between'>
        <h3 className='ml-12 text-3xl '>Volume</h3>
        <div className="flex  flex-wrap  justify-center gap-x-4 h-60 ">
          <div
            style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
            className="w-1/4 h-24 grid place-items-center  rounded-xl shadow-md"
          >
            <span className="text-lg">Accepted</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              02
            </span>
          </div>
          <div
            style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
            className="w-1/4 h-24  grid place-items-center   rounded-xl shadow-md"
          >
            <span className="text-lg"> Declined</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              05
            </span>
          </div>
          <div
            style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
            className="w-1/4 h-24  grid place-items-center   rounded-xl shadow-md"
          >
            <span className="text-lg"> Pending</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              05
            </span>
          </div>
          <div
            style={{ background: "hsla(0, 63%, 89%, 0.6)" }}
            className="w-10/12 h-24  grid place-items-center   rounded-xl shadow-md"
          >
            <span className="text-lg">Total Volumn</span>
            <span style={{ color: "#FF3636CC" }} className="text-5xl">
              120,000
            </span>
          </div>
        </div>

      </div>
      {/* Third container */}
      <div className=" w-10/12 mx-auto">
        <div className="flex justify-between mb-2">
          <h3 className="text-xl font-bold">GROWTH </h3>
          <ul className="flex gap-3 text-sm">
            <label htmlFor="Day" className={chartDays==="Day" ? "text-red-500" : "text-gray-500"}>Day</label>
            <label htmlFor="Week" className={chartDays==="Week" ? "text-red-500" : "text-gray-500"}>Weeks</label>
            <label htmlFor="Month" className={chartDays==="Month" ? "text-red-500" : "text-gray-500"}>Months</label>
            <div className="hidden">

            <input
              onChange={(e) => changeDays(e)}
              type="radio"
              name="Order"
              id="Day"
              checked={chartDays === "Day"}
              value="Day"
            />
            <input
              onChange={(e) => changeDays(e)}
              type="radio"
              name="Order"
              id="Week"
              checked={chartDays === "Week"}
              value="Week"
            />
            <input
              onChange={(e) => changeDays(e)}
              type="radio"
              name="Order"
              id="Month"
              checked={chartDays === "Month"}
              value="Month"
            />
            </div>
          </ul>
        </div>
        <div className=" h-52 w-full shadow-lg flex  justify-center items-end">
          {chartDays === "Day" && <DailyChart/> }
          {chartDays === "Week" && <VendorsCharts />}
          {chartDays === "Month" && <MonthlyOrdersChart/>}
        </div>
      </div>
    </div>
  )
}

export default AdminReport
