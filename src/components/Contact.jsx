import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_79oh2dk",
        "template_t6jtrk6",
        form.current,
        "V7YvYjynicJ43-BDC"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4">
      <h2 className="my-16 text-4xl text-center text-white">
        Contact <span className="text-yellow-400">Me</span>
      </h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full max-w-md mx-auto form"
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="from_email"
              id="name"
              className="w-full px-3 py-2 leading-tight text-black bg-yellow-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_name"
              className="w-full px-3 py-2 leading-tight text-black bg-yellow-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-yellow-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 leading-tight text-black bg-yellow-500 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-yellow-500"
              rows="4"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <button
              type="submit"
              className="w-full lg-w-[20%] px-4 py-2 font-bold text-black bg-yellow-400 rounded hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
