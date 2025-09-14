import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  EyeIcon,
  CubeTransparentIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const accordionItems = [
  {
    id: 1,
    title: "Lower cost of capital",
    description:
      "A decentralized infrastructure that compresses the costs of traditional off-chain securitization and uses open-source services to reduce the intermediary costs and complexity of TradFi.",
    icon: <BanknotesIcon className="w-6 h-6 text-green-700" />,
  },
  {
    id: 2,
    title: "End-to-end transparency",
    description:
      "All transactions are on-chain, ensuring full transparency and auditability for every participant in the ecosystem.",
    icon: <EyeIcon className="w-6 h-6 text-green-700" />,
  },
  {
    id: 3,
    title: "Built for DeFi",
    description:
      "Native DeFi integration enables seamless interaction with decentralized protocols and smart contracts.",
    icon: <CubeTransparentIcon className="w-6 h-6 text-green-700" />,
  },
  {
    id: 4,
    title: "Flexible ownership",
    description:
      "Tokenized ownership allows fractional investment and customizable risk-return profiles for participants.",
    icon: <UsersIcon className="w-6 h-6 text-green-700" />,
  },
];

export default function ChooseEfficiency() {
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f5f9f5] flex items-center justify-center px-8 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-semibold text-green-700 mb-4">
            OUR ADVANTAGE
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Efficiency
          </h2>
          <p className="text-gray-600">
            Liquidity built for the future, available today.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={`border rounded-2xl shadow-sm transition-colors ${
                openItem === item.id ? "bg-green-100" : "bg-[#eaf6fa]"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <span className="font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
                {openItem === item.id ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {openItem === item.id && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
