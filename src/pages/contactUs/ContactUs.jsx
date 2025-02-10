"use client"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import swal from "sweetalert"

const ContactUs = () => {
  
  const handleSubmitForm=(e)=>{
    e.preventDefault()
   swal("Thank You! we will reach you as soon possible!","","success")
   e.target.reset()
  }

  return (
    <div className="min-h-screen bg-[#b8f3f51f] py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you! Reach out to us for any questions or feedback.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-[0_0_15px_rgba(184,243,245,0.3)] max-h-[500px]">
          <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
          <form onSubmit={handleSubmitForm} className="mt-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#b8f3f5] focus:border-[#b8f3f5]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#b8f3f5] focus:border-[#b8f3f5]"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#b8f3f5] focus:border-[#b8f3f5]"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#b8f3f5] text-gray-800 font-semibold rounded-lg shadow-md hover:bg-[#9dd9db] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-[0_0_15px_rgba(184,243,245,0.3)]">
            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Address:</span> 123 Travel Vista Lane, Suite 456, New York, NY 10001
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +1 (123) 456-7890
              </p>
              <p>
                <span className="font-semibold">Email:</span> info@travelvista.com
              </p>
              <p>
                <span className="font-semibold">Business Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-xl shadow-[0_0_15px_rgba(184,243,245,0.3)]">
            <h2 className="text-2xl font-bold text-gray-800">Our Location</h2>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036049!2d-73.98773168459413!3d40.74844047932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633039290000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
