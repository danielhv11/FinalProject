import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions1, pricingOptions2, pricingOptions3, pricingOptions4 } from "../constants";

const Pricing = () => {
  const [selectedOptions, setSelectedOptions] = useState("options1");

  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const getPricingOptions = () => {
    if (selectedOptions === "options1") {
      return pricingOptions1;
    } else if (selectedOptions === "options2") {
      return pricingOptions2;
    } else if (selectedOptions === "options3") {
      return pricingOptions3;
    } else if (selectedOptions === "options4") {
      return pricingOptions4;
    }
  };

  return (
    <div id="pricing" className="pt-[75px]">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide">
        Pricing
      </h2>

      {/* Dropdown for selecting pricing options */}
      <div className="text-center mb-8">
        <label htmlFor="pricingSelect" className="mr-4 text-lg">
          Choose a System Size:
        </label>
        <select
          id="pricingSelect"
          value={selectedOptions}
          onChange={handleSelectChange}
          className="p-2 border border-neutral-400 rounded border border-red-900"
        >
          <option value="options1">8 Kw</option>
          <option value="options2">10 Kw</option>
          <option value="options3">12 Kw</option>
          <option value="options4">14 Kw</option>
        </select>
      </div>

      <div className="flex flex-wrap">
        {getPricingOptions().map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between p-8 border border-neutral-700 rounded-xl h-[500px]">
              {/* Top Section: Title and Price */}
              <div>
                <p className="text-3xl mb-4">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text text-lg mb-4 ml-2">
                      (Most Popular)
                    </span>
                  )}
                </p>
                <p className="mb-4">
                  <span className="text-4xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
                {/* Features List */}
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-4 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe Button at the Bottom */}
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-10 p-3 mt-10 tracking-tight text-lg hover:bg-red-900 border border-red-900 rounded-lg transition duration-200"
              >
                Select
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
