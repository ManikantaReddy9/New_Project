import React, { useEffect, useState, useRef } from "react";

const slides = [
  {
    title: "Lend",
    description:
      "Expand your fixed-income portfolio with structured yield strategies tailored to diverse risk profiles. Self-onboard seamlessly via privacy-preserving, compliant KYC, so you can focus on optimizing returns.",
    steps: [
      { heading: "1. Explore Credit Vaults", text: "Each market is uniquely structured based on borrower profiles, supported assets, blockchain networks, and loan terms." },
      { heading: "2. Execute Loan Agreement", text: "Formalize credit terms by signing a legally binding agreement that outlines borrower obligations and lender rights." },
      { heading: "3. Asset Deployment", text: "Allocate assets to credit vaults, receive interest-bearing credit tokens in return, and use them across DeFi." },
      { heading: "4. Seamless KYC Verification", text: "Access eligibility is verified through zk-proofed KYC, ensuring compliance and privacy." },
    ],
    icon: "💰",
  },
  {
    title: "Borrow",
    description:
      "Streamline the creation and securitization of your credit – interest rates, lockup periods, withdrawal cycles, reserve ratios, risk-adjusted tranches: construct the credit line that works best for you.",
    steps: [
      { heading: "1. Get Onboarded", text: "Prospective borrowers undergo a due diligence process before gaining access to a credit vault." },
      { heading: "2. Vault Configuration", text: "Borrowers set key parameters like loan duration, interest rate model, early exit terms, tranche structure, preferred KYC processes, and utilize an available legal framework." },
      { heading: "3. Yield Generation", text: "Once a loan cycle commences, borrowers receive funds directly into their designated wallet." },
      { heading: "4. Interest Payment", text: "Credit Vaults automate accounting. Borrowers must pay interest at the end of each cycle; unclaimed interest returns to the lending pool." },
    ],
    icon: "🔄",
  },
  {
    title: "Curate",
    description:
      "Leverage your underwriting expertise on-chain to enhance capital efficiency, mitigate counterparty risk, and elevate market transparency with institutional-grade credit structuring.",
    steps: [
      { heading: "1. Curator Onboarding", text: "Curators undergo a comprehensive due diligence process before being authorized to manage a Credit Vault." },
      { heading: "2. Vault Configuration", text: "Curators can set vault fees and earn from their curatorship." },
      { heading: "3. Curator App", text: "Curators have access to a dedicated application that provides real-time visibility." },
      { heading: "4. Performance and Risk Reporting", text: "Curators oversee the generation and distribution of reports on vault performance and risk exposures." },
    ],
    icon: "📊",
  },
];

export default function CreditSlides({ paused, onComplete }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => {
          if (prev === slides.length - 1) {
            clearInterval(intervalRef.current);
            if (onComplete) onComplete(); 
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-[#f4f9f7] flex items-center justify-center px-6 py-10">
      <div style={{width:"1050px"}} className="max-w-6xl w-full flex flex-col md:flex-row gap-10 transition-all duration-700">
        {/* Left Card */}
        <div style={{width:"360px",height:"500px",fontFamily:"serif"}} className=" bg-slate-200 rounded-2xl shadow p-8 flex flex-col justify-between">
          <div>
            <h2 style={{fontSize:"30px"}} className="text-2xl font-semibold">{slide.title}</h2><br></br>
            <p style={{fontSize:"16px"}} className="mt-4 text-gray-600 text-sm">{slide.description}</p>
          </div>

          <div className="flex flex-col items-center mt-8">
            <div style={{height:"150px",width:"100px"}} className="text-6xl">{slide.icon}</div>
            <div className="mt-8 flex space-x-4">
              <button className="px-3 py-2 border border-gray-400 rounded-full hover:bg-gray-100">
                OPEN IN APP
              </button>
              {slide.title === "Lend" && (
                <button className="px-5 py-2 border border-gray-400 rounded-full hover:bg-gray-100">
                  DOCUMENTS
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Steps */}
        <div style={{marginTop:"80px"}} className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {slide.steps.map((step, idx) => (
            <div key={idx}>
              <h3 style={{fontFamily:"serif",fontSize:"20px",fontWeight:500, marginBottom:"20px"}} className="text-lg font-semibold">{step.heading}</h3>
              <p  className="text-gray-600 text-sm mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
