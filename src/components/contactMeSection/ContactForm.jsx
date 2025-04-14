// ContactForm.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const form = useRef();

  const handleInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    emailjs
      .sendForm(
        "service_ko3hmpt",
        "template_ahbmmqd",
        form.current,
        "I6HAT5mUZH7WHabGE"
      )
      .then(
        () => {
          setFormState({ name: "", email: "", message: "" });
          setStatus({
            type: "success",
            message: "Message sent successfully!",
          });
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
          console.error("Email send failed:", error);
        }
      );
  };

  useEffect(() => {
    if (status.type === "success" || status.type === "error") {
      const timer = setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status.type]);

  return (
    <div className="w-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 relative"
      >
        {/* Status Notification */}
        {status.type && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute -top-14 left-0 right-0 flex items-center justify-center gap-2 p-3 rounded-lg ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status.type === "success" ? (
              <FiCheckCircle className="text-xl" />
            ) : (
              <FiAlertCircle className="text-xl" />
            )}
            <span className="font-medium">{status.message}</span>
          </motion.div>
        )}

        {/* Form Inputs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full h-12 px-4 bg-lightBrown/50 rounded-lg focus:ring-2 ring-cyan transition-all duration-300"
            value={formState.name}
            onChange={handleInput}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full h-12 px-4 bg-lightBrown/50 rounded-lg focus:ring-2 ring-cyan transition-all duration-300"
            value={formState.email}
            onChange={handleInput}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full p-4 bg-lightBrown/50 rounded-lg focus:ring-2 ring-cyan transition-all duration-300"
            value={formState.message}
            onChange={handleInput}
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status.type === "loading"}
          className="w-full h-12 text-xl font-bold text-white transition-all duration-300 bg-cyan rounded-lg hover:bg-darkCyan disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.type === "loading" ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;