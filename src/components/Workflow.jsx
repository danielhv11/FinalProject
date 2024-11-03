import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

// Import your number images
import numberOne from "../assets/number-1.png";
import numberTwo from "../assets/number-2.png";
import numberThree from "../assets/number-3.png";
import numberFour from "../assets/number-4.png";

const OurProcess = () => {
  // Array holding your number icons
  const numberIcons = [numberOne, numberTwo, numberThree, numberFour];

  return (
    <div id="ourprocess" className="scroll-mt-[60px] pt-[130px] pb-[30px] overflow-x-hidden">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6">
        Solar Simplified:
        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
          {" "}Our Process.
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mx-4 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
              {numberIcons[index] ? (
                <img src={numberIcons[index]} alt={`Step ${index + 1}`} className="h-full w-full object-cover" />
              ) : (
                <CheckCircle2 className="text-green-400" />
              )}
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
