import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, Send } from "lucide-react";
import { rotateIn, topDown } from '../controller/animation.js'

const Contacts = () => {

  const [animate, setanimate] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setanimate(true)
    }, 100);
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setStatus('Message sent successfully!');
      setTimeout(() => {
        setStatus('');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } else {
      setStatus('Please fill in all fields');
      setTimeout(() => setStatus(''), 2000);
    }
  };

  return (
    <section className={"min-h-screen w-full flex  justify-center relative font-mono  px-6 pt-40 pb-5 max-[900px]:pb-15"}>

      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#2f251b] opacity-5 z-40"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#2f251b] opacity-5 z-40"></div>

      <div className={"w-full absolute top-18 left-0 text-center mb-16" + topDown(animate)}>
        <h1 className="font-bold text-[#2f251b] text-2xl ">Get in Touch</h1>
        <p className="text-sm text-[#2f251b] opacity-90">
          Have an idea, opportunity, or just want to say hi?
        </p>
      </div>

      <div className="flex  w-full max-[900px]:flex-col p-1  gap-8 max-[900px]:gap-5 justify-center items-start z-45">

        <div className="flex flex-col  h-[450px] w-3/10 max-[900px]:w-full gap-8 text-[#2f251b] relative">

          <div className={"bg-[#eddfd0] p-6 w-full rounded-2xl shadow-lg absolute top-0 left-0" + rotateIn(animate)}>
            <div className={"flex items-start gap-4 mb-6"}>
              <div className="bg-[#2f251b] p-3 rounded-xl">
                <Mail className="w-5 h-5 text-[#eddfd0]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider opacity-60 mb-1">
                  Email
                </p>
                <p className="text-base font-medium break-all">
                  laxmansinghrajput5417@.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#2f251b] p-3 rounded-xl">
                <Phone className="w-5 h-5 text-[#eddfd0]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider opacity-60 mb-1">
                  Phone
                </p>
                <p className="text-base font-medium">
                  +91 8819952678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#2f251b] p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-[#eddfd0]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider opacity-60 mb-1">
                  Location
                </p>
                <p className="text-base font-medium">
                  India
                </p>
              </div>
            </div>
          </div>

          <div className={"bg-[#2f251b] p-6 w-full rounded-2xl shadow-lg absolute bottom-0 left-0 " + rotateIn(animate)}>
            <p className="text-[#eddfd0] text-sm uppercase tracking-wider mb-4 opacity-80">
              Connect With Me
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/laxmansingh-rajput" className="flex items-center gap-3 text-[#eddfd0] hover:text-[#B8A082] transition-colors group">
                <Github className="w-5 h-5" />
                <span className="group-hover:translate-x-1 transition-transform">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/laxman-singh-rajput-5a58352b7/" className="flex items-center gap-3 text-[#eddfd0] hover:text-[#B8A082] transition-colors group">
                <Linkedin className="w-5 h-5" />
                <span className="group-hover:translate-x-1 transition-transform">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@laxmansinghrajput-dev" className="flex items-center gap-3 text-[#eddfd0] hover:text-[#B8A082] transition-colors group">
                <Youtube className="w-5 h-5" />
                <span className="group-hover:translate-x-1 transition-transform">Youtube</span>
              </a>
            </div>
          </div>
        </div>

        <div className={"h-[450px] flex flex-col gap-8  bg-[#eddfd0] max-[900px]:w-full max-[900px]:h-auto w-6/10 rounded-2xl p-8 shadow-xl" + rotateIn(animate)}>
          <h2 className=" w-full  text-xl  font-bold text-[#2f251b] ">Send a Message</h2>

          <div className="flex flex-col gap-5 relative  justify-around text-[#2f251b]">
            <div>
              <label className="block text-sm opacity-90 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Hardik Kelotra"
                className="w-full bg-transparent border-b-2 border-[#2f251b] border-opacity-30  outline-none placeholder:opacity-50 focus:border-opacity-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm opacity-90 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hardikkelotra@gmail.com"
                className="w-full bg-transparent border-b-2 border-[#2f251b] border-opacity-30  outline-none placeholder:opacity-50 focus:border-opacity-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm opacity-90 mb-1">
                Message
              </label>
              <textarea 
              onWheel={(e) => {
                e.stopPropagation();
              }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                className="w-full bg-transparent border-b-2 border-[#2f251b] border-opacity-30  outline-none resize-none placeholder:opacity-50 focus:border-opacity-100 transition-all h-20"
              />
            </div>

            {status && (
              <div className={` absolute bottom-12 px-4 py-1 w-full text-center  rounded-lg text-sm ${status.includes('success')
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                {status}
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="mt-4 self-start px-8 py-2  rounded-full bg-[#2f251b] text-[#eddfd0] hover:bg-opacity-90 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contacts;