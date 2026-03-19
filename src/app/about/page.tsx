"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Scale, Shield, BookOpen, Gavel } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-obsidian-950 text-ivory-50 selection:bg-gold-500/30">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* 1. Opening Statement */}
                <section className="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Allahabad High Court</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-ivory-50">
                                    Advocate Saubhagya <span className="text-gradient-gold">Mishra</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gold-600 font-medium tracking-wide">
                                    Criminal Law Practitioner at the Allahabad High Court with 5+ Years of Courtroom Experience
                                </p>
                            </div>

                            <p className="text-lg text-ivory-100 leading-relaxed max-w-xl">
                                Advocate Saubhagya Mishra is a practicing advocate before the Allahabad High Court, focusing primarily on criminal law matters. With over five years of active courtroom experience, he provides strategic, ethical, and client-focused legal representation, ensuring clarity and confidence at every stage of the legal process.
                            </p>
                        </motion.div>

                        {/* Right: Professional Photograph */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ivory-100/10 shadow-2xl bg-white">
                                <img
                                    src="https://ik.imagekit.io/abhishekojha/Jija%20Image.jpeg"
                                    alt="Advocate Saubhagya Mishra"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative backing */}
                            <div className="absolute -top-6 -right-6 w-full h-full border border-gold-500/20 rounded-2xl -z-10" />
                        </motion.div>
                    </div>
                </section>

                {/* 2. Professional Journey */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-lg text-ivory-100 text-center"
                    >
                        <p className="text-xl leading-relaxed">
                            After completing his legal education, Advocate Saubhagya Mishra began his professional journey through hands-on courtroom exposure and practical training. Over the years, he has gained in-depth experience handling criminal law matters and regularly appears before the Allahabad High Court, dealing with complex procedural and substantive issues.
                        </p>
                        <p className="text-xl leading-relaxed mt-8">
                            His practice is built on continuous learning, preparation, and strict adherence to legal ethics.
                        </p>
                    </motion.div>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto mt-16" />
                </section>

                {/* 3. Areas of Practice */}
                <section className="px-6 py-16 max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-ivory-50 mb-4">Areas of Practice</h2>
                        <p className="text-ivory-100">Specialized legal representation focusing on core criminal defense.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white border border-ivory-200/50 hover:border-gold-500/30 transition-colors shadow-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-600">
                                    <Gavel className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-ivory-50 mb-2">Criminal Law</h3>
                                    <p className="text-ivory-100">Primary area of practice involving all stages of criminal proceedings.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid gap-4">
                            {[
                                "Bail and anticipatory bail matters",
                                "Criminal appeals",
                                "Trial proceedings",
                                "FIR, charge-sheet, and procedural remedies",
                                "Matters involving personal liberty and safeguards"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-white/50 border border-ivory-200/50"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                    <span className="text-ivory-50 text-sm tracking-wide font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Approach & Philosophy */}
                <section className="px-6 py-16 bg-obsidian-900 border-y border-ivory-200/30">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-2xl font-serif font-bold text-gold-600">Approach & Philosophy</h2>
                        <blockquote className="text-2xl md:text-3xl font-serif text-ivory-50 leading-normal">
                            "Advocate Saubhagya Mishra believes that effective legal representation begins with listening. Every case is approached with careful analysis, honest assessment, and strategic planning."
                        </blockquote>
                        <p className="text-lg text-ivory-100 max-w-2xl mx-auto">
                            Clients are guided clearly through legal options, risks, and procedures, ensuring transparency at all times. The objective is not merely to argue, but to protect rights within the framework of law.
                        </p>
                    </div>
                </section>

                {/* 5. Court Practice & Professional Details */}
                <section className="px-6 py-16 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-ivory-200/30">
                        <div className="px-4 py-4 md:py-0">
                            <span className="block text-gold-600 font-bold mb-2">Practice Court</span>
                            <span className="text-ivory-50 font-medium">Allahabad High Court</span>
                        </div>
                        <div className="px-4 py-4 md:py-0">
                            <span className="block text-gold-600 font-bold mb-2">Bar Enrollment</span>
                            <span className="text-ivory-50 font-medium">Bar Council of UP</span>
                        </div>
                        <div className="px-4 py-4 md:py-0">
                            <span className="block text-gold-600 font-bold mb-2">Languages</span>
                            <span className="text-ivory-50 font-medium">English and Hindi</span>
                        </div>
                    </div>
                </section>

                {/* 6. Client Assurance */}
                <section className="px-6 py-12 max-w-3xl mx-auto text-center">
                    <div className="p-8 rounded-2xl bg-white border border-ivory-200/50 shadow-sm">
                        <Shield className="w-8 h-8 text-gold-600 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-ivory-50 mb-2">Strict Confidentiality</h3>
                        <p className="text-ivory-100 text-sm leading-relaxed">
                            All client interactions, consultations, and case details are handled with strict confidentiality. Professional ethics and responsibility guide every aspect of legal practice.
                        </p>
                    </div>
                </section>

                {/* 7. Personal Note */}
                <section className="px-6 py-12 max-w-2xl mx-auto text-center">
                    <p className="text-ivory-100 italic text-sm">
                        "Outside the courtroom, Advocate Saubhagya Mishra values continuous legal learning and staying updated with evolving judicial interpretations, ensuring informed representation for every client."
                    </p>
                </section>

                {/* 8. Call to Action */}
                <section className="px-6 py-20 text-center">
                    <div className="max-w-xl mx-auto space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-ivory-50">Schedule a Confidential Consultation</h2>
                        <p className="text-lg text-ivory-100">
                            If you require professional legal assistance or wish to understand your legal position, you may schedule a confidential consultation.
                        </p>
                        <Link
                            href="/consultation"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-white font-bold text-lg rounded-xl hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/20 transition-all"
                        >
                            Book Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
