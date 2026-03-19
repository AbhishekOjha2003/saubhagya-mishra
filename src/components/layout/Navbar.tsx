"use client";

import Link from "next/link";
import { Scale, Menu, X, Phone, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"
                    }`}
            >
                <div className={`mx-4 md:mx-8 rounded-full transition-all duration-500 ${scrolled ? "glass-dark shadow-2xl" : ""
                    }`}>
                    <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/25"
                            >
                                <Scale className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="hidden sm:block">
                                <span className="block font-serif text-xl font-bold text-ivory-50 leading-none">
                                    Saubhagya Mishra
                                </span>
                                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-500 font-medium">
                                    Advocate • High Court
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <Link
                                        href={link.href}
                                        className="relative px-5 py-2 text-sm font-medium text-ivory-100/80 hover:text-gold-400 transition-colors group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-500 group-hover:w-4/5 transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="tel:+918795276040" className="flex items-center gap-2 text-ivory-100/60 hover:text-gold-400 transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+91 8795276040</span>
                            </a>
                            <Link
                                href="/admin/login"
                                className="px-5 py-2 rounded-full border border-ivory-100/20 text-ivory-100/80 text-sm font-medium hover:border-gold-500 hover:text-gold-500 transition-all"
                            >
                                Login
                            </Link>
                            <Link
                                href="/consultation"
                                className="group relative px-6 py-3 bg-gold-500 text-obsidian-950 font-bold text-sm rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-gold-500/30"
                            >
                                <span className="relative z-10">Book Consultation</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-ivory-50"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-obsidian-950/95 backdrop-blur-xl lg:hidden"
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="absolute right-0 top-0 h-full w-full max-w-sm bg-obsidian-900 shadow-2xl p-8 pt-24"
                        >
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-serif text-ivory-50 hover:text-gold-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-12"
                            >
                                <Link
                                    href="/consultation"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full py-4 bg-gold-500 text-obsidian-950 text-center font-bold text-lg rounded-xl"
                                >
                                    Book Consultation
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
