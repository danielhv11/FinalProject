import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'; // Import additional icons

const Footer = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    comment: '',
  });

  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to thank you page on success
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
    <footer className="pt-[95px] mt-20 border-t py-10 border-neutral-700" id="contactus">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Business Information */}
        <div>
          <h2 className="text-6xl font-bold text-white mb-4">Contact Us</h2>
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text mb-6">
            Have a Question or Need Help?
          </h3>
          <ul className="space-y-4 text-neutral-300">
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Address:</span>
              <span>9900 Spectrum Dr, Austin Texas 78717</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-red-500" />
              <Mail className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Contact:</span>
              <span>972-800-6402 | info@avetecsolar.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Business Hours:</span>
              <span>Mon-Fri, 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/avetecsolarenergy/" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-red-500 to-red-800 rounded-full"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/avetecsolar/" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-red-500 to-red-800 rounded-full"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300">
                Full Name
              </label>
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
              <label className="block text-sm font-medium text-neutral-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-600 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300">
                Email Address
              </label>
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
              <label className="block text-sm font-medium text-neutral-300">
                Comment
              </label>
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
              <label htmlFor="consent" className="ml-2 text-sm text-neutral-300">
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
    </footer>
  );
};

export default Footer;
