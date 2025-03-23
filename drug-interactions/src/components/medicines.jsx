import React from "react";
import Navbar from "./navbar";

export default function Medicines() {
  return (
    <>
    <Navbar/>
    <div className="w-screen min-h-screen bg-[#F2F0EB] flex flex-col items-center p-6">
      <h1 className="font-bold text-xl mb-4 p-8">Drug Drug Interactions</h1>
            {/* SEARCH BAR */}
      <div className="flex flex-col">
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <div className="min-w-full inline-block align-middle">
            <div className="relative text-gray-500 focus-within:text-gray-900 mb-4 p-4">
              <div className="absolute inset-y-0 align-center flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Search for medication"
              />
            </div>

            {/* TABLE */}
            <div className="overflow-auto max-h-[400px] rounded-xl">
              <table className="min-w-full bg-white rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-5 text-sm leading-6 font-semibold text-gray-900 capitalize text-center rounded-t-xl">Drug 1</th>
                    <th className="p-5 text-sm leading-6 font-semibold text-gray-900 capitalize text-center">Drug 2</th>
                    <th className="p-5 text-sm leading-6 font-semibold text-gray-900 capitalize text-center">Interactions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {[
                    ["Trioxsalen", "Verteprofin", "Drug 1 may increase the photosensitizing activities of Drug 2."],
                    ["Cyclophosphamide", "Digoxin", "Drug 1 may decrease the cardiotoxic activities of Drug 2."],
                    ["Trifluridine", "Deslanoside","Drug 1 may decrease the cardiotoxic activities of Drug 2."],
                    ["Idelalisib", "Deslanoside" ,"Drug 1 may decrease the cardiotoxic activities of Drug 2."],
                    ["Ecabet" ,"Acetyldigitoxin","Drug 1 may decrease the cardiotoxic activities of Drug 2."],
                    ["Fenbufen","Gatifloxacin", "Fenbufen may increase the neuroexcitatory activities of Gatifloxacin."]
                  ].map(([drug1, drug2, interaction], idx) => (
                    <tr key={idx} className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="p-5 text-sm leading-6 text-gray-900 text-center">{drug1}</td>
                      <td className="p-5 text-sm leading-6 text-gray-900 text-center">{drug2}</td>
                      <td className="p-5 text-sm leading-6 text-gray-900 text-center">{interaction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* END TABLE */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
