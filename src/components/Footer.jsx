import React from "react";
import myImage from '../assets/logo2.jpg'

export default function Footer() {
  return (
    <footer style={{height:"100vh"}} className="bg-[#0a1a15] text-gray-300 px-6 md:px-16 py-12">
      <div style={{position:"relative",top:"100px",width:"1000px"}} className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <div style={{display:"flex"}}>
              <img style={{height:"20px",width:"20px",marginTop:"6px",marginRight:"5px",transform:"rotate(-45deg)",borderRadius:"6px"}} src={myImage} alt="logo" />
              <h1 className="text-white text-2xl font-bold mb-6">Pareto</h1><br></br><br></br>
            </div>
            <p className="mb-4">Subscribe to our newsletter</p>
            <div className="flex items-center border-b border-gray-500 w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none flex-1 py-2 text-sm text-white placeholder-gray-400"
              />
              <button className="text-sm uppercase tracking-wide font-medium py-2">
                Subscribe
              </button>
            </div><br></br>
            <div className="flex">
              <div className="flex space-x-6 mt-6">
              <a href="#" className="hover:text-white">✕</a>
              <a href="#" className="hover:text-white">𓅓</a>
              <a href="#" className="hover:text-white">✈</a>
              <a href="#" className="hover:text-white">in</a>
              <a href="#" className="hover:text-white">◉</a>
              <a href="#" className="hover:text-white">⍟</a>
            </div>
            <div style={{position:"relative",bottom:"20px",left:"450px"}} className="flex flex-wrap gap-6 text-xs text-gray-400 mt-12">
              <a href="#">IPFS app</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Brand Kit</a></li>
                <li><a href="#" className="hover:text-white">Governance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">FAS_USDC</a></li>
                <li><a href="#" className="hover:text-green-400">BAS_USDT</a></li>
                <li><a href="#" className="hover:text-white">FAL_USDC</a></li>
              </ul>
            </div>
          </div>
        </div><br></br>
        <div className="border-t border-gray-700 mt-6 pt-6"><br></br><br></br>
          <p style={{textAlign:"justify",fontSize:"14px"}} className="text-[11px] leading-5 text-gray-500">
            All content available on this Website is general in nature, not directed or
            tailored to any particular person, and is for informational purposes only.
            Neither the Website nor any of its content is offered as investment advice
            and should not be deemed as investment advice or a recommendation to purchase
            or sell any specific security. The information contained herein reflects the
            opinions and projections of Pareto as of the date hereof, which are subject
            to change without notice at any time. Pareto does not represent that any
            opinion or projection will be realized. Neither Pareto nor any of its
            advisers, officers, directors, or affiliates represents that the information
            presented on this Website is accurate, current, or complete, and such
            information is subject to change without notice. Any performance information
            must be considered in conjunction with applicable disclosures. Past
            performance is not a guarantee of future results. Neither this Website nor
            its contents should be construed as legal, tax, or other advice. Individuals
            are urged to consult with their own tax or legal advisers before entering
            into any advisory contract.
          </p>
        </div>
      </div>
    </footer>
  );
}
