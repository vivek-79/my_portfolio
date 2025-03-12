"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            await emailjs.send(
                "your_service_id", // Replace with your EmailJS service ID
                "your_template_id", // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "your_public_key" // Replace with your EmailJS public key
            );
            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Email sending error:", error);
            setSuccess("Failed to send message. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-[#0A1A2F] text-white" id="contact">
            <div className="container mx-auto px-4 text-center">
               
                {/* Section Header */}
                <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg shadow-lg mb-8 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]">
                    <div className="absolute inset-0 bg-opacity-20 backdrop-blur-md"></div>
                    <div className="flex space-x-4 overflow-hidden">
                        <div className="animate-marquee1 flex min-w-max">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                                Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact<span className="opacity-0">p </span>
                            </h2>
                        </div>
                        <div className="animate-marquee1 flex min-w-max" aria-hidden="true">
                            <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                                ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact ✦ Contact
                            </h2>
                        </div>
                    </div>
                </div>


                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-white font-semibold transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
                            }`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success && <p className="text-sm text-green-400 mt-2">{success}</p>}
                </motion.form>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="mailto:vivekroy5667@gmail.com" className="text-blue-400 hover:text-blue-300 text-2xl"><FaEnvelope /></a>
                    <a href="tel:+917970335667" className="text-green-400 hover:text-green-300 text-2xl"><FaPhone /></a>
                    <a href="https://www.linkedin.com/in/vivek-kumar-469384281/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl"><FaLinkedin /></a>
                    <a href="https://github.com/vivek-79" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-2xl"><FaGithub /></a>
                </div>
            </div>
        </section>
    );
}
