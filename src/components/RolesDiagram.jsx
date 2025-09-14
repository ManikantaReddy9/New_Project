import React from "react";

export default function RolesDiagram() {
  return (
    <div style={{fontFamily:"serif"}} className="min-h-screen bg-[#dce9e0] flex flex-col items-center py-10 px-6">
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{fontSize:"35px",fontWeight:500}} className="text-2xl font-semibold text-gray-800 mb-12">
        Where Roles Create Value
      </h2>
      <br></br>
      <br></br>
      <br></br>

      <div className="relative max-w-6xl w-full grid grid-cols-3 gap-4 items-center">

        <div className="flex flex-col items-end space-y-24">
          <div className="text-right">
            <div style={{position:"relative",right:"100px",bottom:"60px"}} className="bg-gray-200 border-2 border-gray-700 px-6 py-3 rounded-l-full font-semibold">
              BORROWER
            </div>
            <div style={{position:"relative",right:"100px",bottom:"20px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}} className="mt-4 bg-gray-200 border px-4 py-1 shadow text-sm">
              INTEREST PAYMENT →
            </div><span></span>
          </div>
          <div className="text-right">
            <div style={{position:"relative",right:"80px",top:"120px"}} className="bg-gray-200 border-2 border-gray-700 px-6 py-3 rounded-l-full font-semibold">
              LENDERS
            </div>
            <div style={{position:"relative",right:"80px"}} className="mt-4 bg-gray-200 border px-4 py-1 rounded-full shadow text-sm">
              LIQUIDITY PROVISION →
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-24 flex flex-col space-y-2"><span style={{position:"relative",top:"30px",right:"120px"}}>----------------------</span>
              <div className="bg-gray-200 border px-4 py-1 shadow text-sm">
                LOAN REQUEST
              </div>
              <span style={{position:"relative",left:"180px",bottom:"40px"}}>---------------- →</span>
              <span style={{position:"relative",top:"-15px",right:"130px"}}>← -----------------------</span>
              <div style={{position:"relative",bottom:"50px"}} className="bg-gray-200 border px-4 py-1 shadow text-sm">
                CREDIT ASSESSMENT
              </div>
              <span style={{position:"relative",left:"180px",bottom:"90px"}}>----------------------</span>
            </div><br></br><br></br>

            <div className="w-64 h-64 rounded-full border-[6px] border-gray-700 flex items-center justify-center text-lg font-semibold">
              Credit Vault
            </div>

            <div className="absolute -bottom-12 bg-gray-200 border px-4 py-1 rounded-full shadow text-sm">
              INTEREST EARNINGS →
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-24">
          <div>
            <div  style={{position:"relative",bottom:"70px",left:"30px"}} className="bg-gray-200 border-2 border-gray-700 px-6 py-3 rounded-r-full font-semibold">
              CURATOR
            </div>
            <div style={{position:"relative",bottom:"20px",left:"30px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} className="mt-2 bg-gray-200 border px-4 py-1 shadow text-sm">
              ← CYCLES, RATES MANAGEMENT
            </div>
          </div>

          <div>
            <div style={{position:"relative",top:"120px",left:"30px"}} className="bg-gray-200 border-2 border-gray-700 px-6 py-3 rounded-r-full font-semibold">
              TRANCHES
            </div>
            <div style={{position:"relative",left:"30px"}} className="mt-4 bg-gray-200 border px-4 py-1 rounded-full shadow text-sm">
              ← RISK DIVERSIFICATION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
