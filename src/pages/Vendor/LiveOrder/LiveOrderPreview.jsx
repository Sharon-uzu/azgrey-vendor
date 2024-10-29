import React from "react";
import VendorsCharts, { DailyChart, MonthlyOrdersChart } from "../../../Components/ChartJs/VendorsCharts";



const LiveOrderPreview = () => {
  const [chartDays, setChartDays] = React.useState("Week");

  const changeDays = (e) => {
    setChartDays(e.target.value);
  };

  return (
    <div className=" w-2/5 flex flex-col ">
      <h2 className=" flex items-center ml-8 my-4 text-2xl">STATISTICS</h2>

      <div className="flex  flex-wrap  justify-center gap-4 h-60 mb-4">
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-2/5 h-28 grid place-items-center  rounded-xl shadow-md"
        >
          <span className="text-xl">Accepted</span>
          <span style={{ color: "#FF3636CC" }} className="text-7xl">
            02
          </span>
        </div>
        <div
          style={{ background: "hsla(0, 11%, 90%, 0.6)" }}
          className="w-2/5 h-28 grid place-items-center   rounded-xl shadow-md"
        >
          <span className="text-xl"> Declined</span>
          <span style={{ color: "#FF3636CC" }} className="text-7xl">
            05
          </span>
        </div>
        <div
          style={{ background: "hsla(0, 63%, 89%, 0.6)" }}
          className="w-10/12 h-28 grid place-items-center   rounded-xl shadow-md"
        >
          <span className="text-xl">Total orders</span>
          <span style={{ color: "#FF3636CC" }} className="text-7xl">
            60
          </span>
        </div>
      </div>
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
  );
};

export default LiveOrderPreview;
