import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const location = useLocation();  
  const navigate = useNavigate();  
  const { systemSize, pricingOption } = location.state || {};  

  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    comment: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Format phone number to (xxx) xxx-xxxx
  const handlePhoneChange = (e) => {
    let phoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters

    if (phoneNumber === '') {
      setFormData({ ...formData, phoneNumber: '' });
      return;
    }

    if (phoneNumber.length <= 3) {
      phoneNumber = `(${phoneNumber}`;
    } else if (phoneNumber.length <= 6) {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    if (phoneNumber.length > 14) {
      phoneNumber = phoneNumber.slice(0, 14);
    }

    setFormData({ ...formData, phoneNumber });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      systemSize,
      pricingOption,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData), 
      });

      if (response.ok) {
        navigate('/thank-you');  
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div id="checkout" className="pt-[75px] min-h-screen flex justify-center items-center bg-black">
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide text-black">Checkout</h2>

        {/* Display pricing details if available */}
        {systemSize && pricingOption && (
          <div className="mb-8">
            <h3 className="text-3xl mb-4 text-black">System Size: {systemSize}</h3>
            <h4 className="text-2xl mb-4 text-black">Pricing Option: {pricingOption.title}</h4>
            <p className="text-lg mb-4 text-black">Price: {pricingOption.price} / Month</p>
            <ul className="list-disc pl-5 text-black">
              {pricingOption.features.map((feature, index) => (
                <li key={index} className="text-sm">{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* User Information Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneChange} 
                className="w-full px-3 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Comment</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                className="h-4 w-4 text-blue-500 border-neutral-600 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="consent" className="ml-2 text-sm text-black">
                By checking this box, you consent to receiving promotional and/or transactional text messages and/or emails from Avetec Solar. Standard messaging rates may apply.
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-semibold rounded-md hover:from-red-600 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
