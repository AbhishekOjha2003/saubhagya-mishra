"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSent(true);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-obsidian-950 pt-32 pb-20 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-[50%] h-[800px] bg-gradient-to-l from-obsidian-900 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-serif font-bold text-ivory-50 mb-6"
                        >
                            Get in <span className="text-gradient-gold">Touch</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-ivory-100/60 max-w-xl mx-auto"
                        >
                            Visit our chambers or schedule a consultation online. We are here to assist you with your legal needs.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            {/* Visual Map Placeholder */}
                            <div className="aspect-video w-full rounded-3xl bg-obsidian-900 border border-ivory-100/10 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/77.2090,28.6139,13,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsIn0.placeholder')] bg-cover bg-center opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-500" />
                                {/* Since we don't have a real map token, we use a CSS gradient pattern as fallback if image fails or just as style */}
                                <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

                                {/* Pin */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="w-4 h-4 rounded-full bg-gold-500 animate-ping absolute inset-0" />
                                        <div className="w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.8)] border-2 border-obsidian-950 relative z-10" />
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-obsidian-950/90 backdrop-blur border border-gold-500/30 rounded-lg text-[10px] font-bold text-gold-500 whitespace-nowrap">
                                            Allahabad High Court
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-ivory-100/10 flex items-center justify-center shrink-0 text-gold-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-bold text-ivory-50 mb-2">Chamber Address</h3>
                                        <p className="text-ivory-100/60 leading-relaxed">
                                            Chamber No. 29, Block A,<br />
                                            Allahabad High Court / इलाहाबाद उच्च न्यायालय
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-ivory-100/10 flex items-center justify-center shrink-0 text-gold-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-bold text-ivory-50 mb-2">Phone & Fax</h3>
                                        <p className="text-ivory-100/60 leading-relaxed">
                                            +91 8795276040 (Mobile / मोबाइल)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-ivory-100/10 flex items-center justify-center shrink-0 text-gold-500">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-bold text-ivory-50 mb-2">Email</h3>
                                        <p className="text-ivory-100/60 leading-relaxed">
                                            contact@advocatemishra.com<br />
                                            urgent@advocatemishra.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-ivory-100/10 flex items-center justify-center shrink-0 text-gold-500">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-bold text-ivory-50 mb-2">Office Hours</h3>
                                        <p className="text-ivory-100/60 leading-relaxed">
                                            Mon - Fri: 10:00 AM - 7:00 PM<br />
                                            Sat: 10:00 AM - 2:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-obsidian-900/30 border border-ivory-100/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl"
                        >
                            {!isSent ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full px-4 py-3 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-ivory-100/20"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full px-4 py-3 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-ivory-100/20"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Subject</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-ivory-100/20"
                                            placeholder="Purpose of inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-ivory-100/20 resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gold-500 text-obsidian-950 font-bold text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>Send Message <Send className="w-5 h-5" /></>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-ivory-50 mb-4">Message Sent</h3>
                                    <p className="text-ivory-100/60">
                                        Thank you for contacting us. We will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSent(false)}
                                        className="mt-8 text-gold-500 text-sm font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>

                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
