import React, { useState } from "react";

export default function SyntheticDollar() {
  const [activeTab, setActiveTab] = useState("USP");

  return (
    <div className="min-h-screen bg-[#f4f9f7] flex flex-col items-center py-10 px-6">
      <div style={{height:"300px"}} className="max-w-5xl w-full bg-slate-100 rounded-2xl shadow p-8 mt-20">
        <h1 className="text-2xl font-semibold text-gray-800">
          USP, the credit-based<br></br> synthetic dollar
        </h1><br></br>
        <p className="mt-2 text-gray-600">
          USP is a synthetic dollar protocol backed by <br></br>
          real-world institutional-grade private credit.
        </p><br></br>

        <div className="mt-6 flex space-x-4">
          <button className="px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
            OPEN IN APP
          </button>
          <button className="px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
            DOCUMENTS
          </button>
        </div>

        <div className="-mt-6 flex justify-end">
          <div style={{position:"relative",bottom:"220px"}} className="flex bg-gray-100 rounded-full p-1 ">
            <button
              className={`px-4 py-1 rounded-full ${
                activeTab === "USP"
                  ? "bg-green-900 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("USP")}
            >
              $ USP
            </button>
            <button
              className={`px-4 py-1 rounded-full ${
                activeTab === "sUSP"
                  ? "bg-green-900 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("sUSP")}
            >
              $ sUSP
            </button>
          </div>
        </div>

        <div style={{position:"relative",bottom:"190px",left:"460px"}} className="mt-6 flex space-x-3 text-center">
          <div style={{height:"150px",width:"150px",textAlign:"center",alignContent:"center"}} className="bg-slate-200 p-4 rounded-lg">
            <p className="text-gray-500">Price</p>
            <p className="text-xl font-semibold">$1</p>
          </div>
          <div style={{height:"150px",width:"150px",textAlign:"center",alignContent:"center"}} className="bg-slate-200 p-4 rounded-lg">
            <p className="text-gray-500">TVL</p>
            <p className="text-xl font-semibold">$30m</p>
          </div>
          <div style={{height:"150px",width:"150px",textAlign:"center",alignContent:"center"}} className="bg-slate-200 p-4 rounded-lg">
            <p className="text-gray-500">Collateralization</p>
            <p className="text-xl font-semibold">15.2%</p>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl shadow p-6 flex flex-col items-center text-center bg-slate-100">
          <div style={{marginRight:"130px",fontSize:"60px"}} className="text-4xl mb-4">🧩</div><br></br>
          <h3 style={{marginRight:"100px"}} className="text-lg font-semibold">Composable</h3>
          <p style={{textAlign:"left",fontFamily:"serif",fontSize:"15px"}} className="mt-2 text-gray-600 text-sm">
            USP is transferable, <br></br>permissionless, and seamlessly<br></br> integrates into
            DeFi and CeFi for<br></br> enhanced efficiency.
          </p>
        </div>

        <div className="bg-slate-100 rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <div style={{marginRight:"100px",fontSize:"60px"}} className="text-4xl mb-4">⚖️</div><br></br>
          <h3 style={{marginRight:"30px"}} className="text-lg font-semibold">Overcollateralized</h3>
          <p style={{textAlign:"left",fontFamily:"serif",fontSize:"15px"}} className="mt-2 text-gray-600 text-sm">
            Backed 1:1, USP is fully <br></br>collateralized by stablecoins.
          </p>
        </div>

        <div className="bg-slate-100 rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <div style={{marginRight:"150px",fontSize:"60px"}} className="text-4xl mb-4">🛡️</div><br></br>
          <h3 style={{marginRight:"160px"}} className="text-lg font-semibold">Safe</h3>
          <p style={{textAlign:"left",fontFamily:"serif",fontSize:"15px"}} className="mt-2 text-gray-600 text-sm">
            Although backed by solid, liquid<br></br> assets, USP is also protected by<br></br> a
            stability fund, funded by<br></br> protocol revenue, to shield<br></br> holders in a
            systemic crisis.
          </p>
        </div>
      </div>
    </div>
  );
}
