import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  

const Pricing = () => {
  const [selectedOptions, setSelectedOptions] = useState("8 Kw");
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pricing");
        setPricingData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching pricing data:", err);
        setError("Failed to load pricing data");
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const getPricingOptions = () => {
    if (!pricingData) return [];
    switch (selectedOptions) {
      case "8 Kw":
        return pricingData.options1;  // Pricing for 8 Kw
      case "10 Kw":
        return pricingData.options2;  // Pricing for 10 Kw
      case "12 Kw":
        return pricingData.options3;  // Pricing for 12 Kw
      case "14 Kw":
        return pricingData.options4;  // Pricing for 14 Kw
      default:
        return [];
    }
  };

  const handleSelect = (option) => {
    // Pass the selected option and system size to the Checkout page via navigation state
    navigate("/checkout", {
      state: {
        systemSize: selectedOptions,
        pricingOption: option,
      },
    });
  };

  if (loading) {
    return <div>Loading pricing data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="pricing" className="pt-[75px]">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide">
        Pricing
      </h2>

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
          <option value="8 Kw">8 Kw</option>
          <option value="10 Kw">10 Kw</option>
          <option value="12 Kw">12 Kw</option>
          <option value="14 Kw">14 Kw</option>
        </select>
      </div>

      <div className="flex flex-wrap">
        {getPricingOptions().map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col justify-between p-8 border border-neutral-700 rounded-xl h-[500px]">
              <div>
                <p className="text-3xl mb-4">{option.title}</p>
                <p className="mb-4">
                  <span className="text-4xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-4 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSelect(option)}  // Handle the selection
                className="inline-flex justify-center items-center text-center w-full h-10 p-3 mt-10 tracking-tight text-lg hover:bg-red-900 border border-red-900 rounded-lg transition duration-200"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
