import React, { useState } from "react";

const Hero = () => {
  const [selected, setSelected] = useState("falconx");

  const partners = {
    fasanara: {
      title: "Fasanara Digital",
      subtitle: "Digital Asset Manager",
      tags: ["ETH", "Flexible"],
      description:
        "Fasanara Digital provides diversified exposure across crypto markets with a focus on structured credit strategies.",
      tvl: "$50M",
      apy: "12%",
      redemption: "Quarterly",
    },
    falconx: {
      title: "FalconX",
      subtitle: "Prime Brokerage",
      tags: ["USDC", "Fixed rate"],
      description:
        "Lending funds to an SPV managed by a top-tier Prime Broker, providing financing to end-counterparties while being secured by structural protections.",
      tvl: "$30M",
      apy: "Hidden",
      redemption: "Monthly",
    },
    bastion: {
      title: "Bastion Trading",
      subtitle: "Market Making",
      tags: ["USDT", "Fixed rate"],
      description:
        "Fixed rate loan channeling funds into derivatives trading and market-making strategies.",
      tvl: "$20M",
      apy: "8%",
      redemption: "Monthly",
    },
  };

  const current = partners[selected];

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[#F0F5F1] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between px-10 z-0">
        {/* Left waves */}
        <svg
          className="w-1/2 h-full opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 700"
          preserveAspectRatio="xMinYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="leftWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#74D88A" stopOpacity="1" />
              <stop offset="100%" stopColor="#74D88A" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(25)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${100 + i * 20} C250 ${120 + i * 20}, 350 ${220 + i * 20}, 600 ${280 + i * 20}`}
              stroke="url(#leftWaveGradient)"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>

        <svg
          className="w-1/2 h-full opacity-70 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 700"
          preserveAspectRatio="xMinYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="rightWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#74D88A" stopOpacity="1" />
              <stop offset="100%" stopColor="#74D88A" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(25)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${100 + i * 20} C250 ${120 + i * 20}, 350 ${220 + i * 20}, 600 ${280 + i * 20}`}
              stroke="url(#rightWaveGradient)"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center mt-24 pt-16 pb-16">
        <div
          style={{ fontFamily: "serif" }}
          className="max-w-xs w-full bg-slate-100 rounded-xl shadow-sm text-center border border-gray-200 overflow-hidden"
        >
          <div className="w-full bg-slate-200 flex items-center space-x-3 p-4 mb-3">
            <div className="bg-[#1a1a1a] rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{current.title}</h2>
              <p className="text-sm text-gray-800 relative left-[18px] text-[15px]">
                {current.subtitle}
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-center mb-4 mr-24">
            {current.tags.map((tag, i) => (
              <span
                key={i}
                style={{ borderRadius: "10px", fontSize: "14px" }}
                className="px-3 py-2 bg-gray-300 text-xs text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ padding: "0 16px 16px 16px" }}>
            <p className="text-gray-600 text-m text-justify mb-3 px-5">{current.description}</p>
            <div className="flex justify-around items-center text-sm font-semibold pt-4">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">TVL</p>
                <p className="text-xl font-bold text-gray-800">{current.tvl}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Net APY</p>
                <p className="text-xl font-bold text-gray-800">{current.apy}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Redemptions</p>
                <p className="text-xl font-bold text-gray-800">{current.redemption}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setSelected("fasanara")}
            className={`px-3 py-1 text-sm rounded-full border ${
              selected === "fasanara"
                ? "bg-[#E8F5E9] text-[#4CAF50] border-[#C8E6C9]"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            FASANARA DIGITAL
          </button>

          <button
            onClick={() => setSelected("falconx")}
            className={`px-3 py-1 text-sm rounded-full border ${
              selected === "falconx"
                ? "bg-[#E8F5E9] text-[#4CAF50] border-[#C8E6C9]"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            FALCONX
          </button>

          <button
            onClick={() => setSelected("bastion")}
            className={`px-3 py-1 text-sm rounded-full border ${
              selected === "bastion"
                ? "bg-[#E8F5E9] text-[#4CAF50] border-[#C8E6C9]"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            BASTION TRADING
          </button>
        </div>

        <div style={{ fontFamily: "serif", fontWeight: 300 }} className="mt-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl font-semibold text-[#3D483D] mb-6 leading-tight">
            Radically transforming credit, on-chain
          </h1>
          <p className="-mt-5 text-lg text-gray-600 leading-relaxed">
            Building a marketplace of scaled on-chain credit facilities that
            displace legacy lending infrastructure and loan origination processes
            at each stage of the loan lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
