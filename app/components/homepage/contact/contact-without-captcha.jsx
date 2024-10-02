// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useState } from 'react';
import { TbMailForward } from 'react-icons/tb';
import { FaHeadset } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdEmail, MdMessage } from "react-icons/md";
import { toast } from 'react-toastify';

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
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
      }
    } catch (error) {
      // toast.error(error?.text || error);
    }
  };

  return (
    <div>
      <p className=" flex items-center gap-2 font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        <FaHeadset /> Get in touch
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"If you have any questions or concerns, feel free to contact me."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base flex items-center gap-2">
              <IoMdPerson /> Your Name
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-md px-3 py-2"
              type="text"
              maxLength="100"
              required
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base flex items-center gap-2">
              <MdEmail /> Your Email
            </label>
            <input
              className="bg-[#10172d] w-full border rounded-md px-3 py-2"
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
            <label className="text-base flex items-center gap-2">
              <MdMessage /> Your Message
            </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md px-3 py-2"
              maxLength="500"
              required
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button
              className="flex items-center gap-1 hover:gap-3 bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-white"
              onClick={handleSendMail}
            >
              <span>Send Message</span>
              <TbMailForward size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
