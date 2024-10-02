import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaHeadset } from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';
import { IoMdPerson } from "react-icons/io";
import { MdEmail, MdMessage } from "react-icons/md"

function ContactWithCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!captcha) {
      toast.error('Please complete the captcha!');
      return;
    }

    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);
      const teleRes = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, input);

      if (res.status === 200) {
        toast.success("Thanks for reaching out! I'll get back to you as soon as possible");

        setInput({
          name: '',
          email: '',
          message: '',
        });
        setCaptcha(null);

      }
    } catch (error) {
      // toast.error(error?.text || error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="flex items-center gap-2 font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        <FaHeadset /> Get in touch
      </p>
      <div className="max-w-3xl w-full text-white rounded-lg border border-[#464c6a] p-6 lg:p-8 bg-[#10172d] shadow-lg">
        <p className="text-sm text-[#d3d8e8] mb-6">
          If you have any questions or concerns, feel free to contact me.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-base flex items-center gap-2 text-[#d3d8e8]">
              <IoMdPerson /> Name
            </label>
            <input
              className="bg-[#1c2a4a] w-full border border-[#3b486b] rounded-md px-4 py-2 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16f2b3] focus:border-transparent"
              type="text"
              maxLength="100"
              required
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base flex items-center gap-2 text-[#d3d8e8]">
              <MdEmail /> Email
            </label>
            <input
              className="bg-[#1c2a4a] w-full border border-[#3b486b] rounded-md px-4 py-2 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16f2b3] focus:border-transparent"
              type="email"
              maxLength="100"
              required
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
              value={input.email}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base flex items-center gap-2 text-[#d3d8e8]">
              <MdMessage /> Message
            </label>
            <textarea
              className="bg-[#1c2a4a] w-full border border-[#3b486b] rounded-md px-4 py-2 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#16f2b3] focus:border-transparent"
              maxLength="500"
              required
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(code) => setCaptcha(code)}
          />
          <div className="flex flex-col items-center gap-4 mt-4">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button
              className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-violet-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
              onClick={handleSendMail}
            >
              <span>Send Message</span>
              <TbMailForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWithCaptcha;
