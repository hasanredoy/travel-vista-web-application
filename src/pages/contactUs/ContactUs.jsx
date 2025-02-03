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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10 grid lg:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className=" text-xl md:text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 md:max-w-md lg:w-full">We’d love to hear from you. Reach out to us via the details below or send us a message.</p>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700"><FaMapMarkerAlt className="text-[#00dbe2]" /> 123 Main Street, Dubai, UAE</p>
            <p className="flex items-center gap-3 text-gray-700"><FaEnvelope className="text-[#00dbe2]" /> contact@travelvista.com</p>
            <p className="flex items-center gap-3 text-gray-700"><FaPhone className="text-[#00dbe2]" /> +971 123 4567</p>
          </div>
          <div className="flex gap-4 mt-4 text-[#00dbe2] text-2xl">
            <a href="#" className="hover:text-[#00a3a8]"><FaFacebook /></a>
            <a href="#" className="hover:text-[#00a3a8]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#00a3a8]"><FaInstagram /></a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className=" text-xl md:text-3xl  font-bold text-gray-800 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmitForm} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#00dbe2]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#00dbe2]"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#00dbe2]"
            ></textarea>
           <div className=" flex justify-center">
           <button
              type="submit"
              className="btn-primary"
            >
              Send Message
            </button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
