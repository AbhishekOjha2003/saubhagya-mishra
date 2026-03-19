"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="h-screen w-full flex items-center px-6 md:px-24 relative pointer-events-none">
            <div className="max-w-2xl pointer-events-auto z-10">
                <div className="mb-6 inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
                    <span className="px-4 py-2 rounded-full border border-gold-500/30 bg-navy-900/40 backdrop-blur-md text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">
                        High Court of Judicature
                    </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-8 text-marble-50 animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
                    Defending <br />
                    <span className="text-gradient-gold">Your Liberty.</span>
                </h1>

                <p className="text-marble-100/70 text-lg md:text-xl font-light mb-12 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.6s" }}>
                    Advocate Saubhagya Mishra brings 5+ years of relentless advocacy to the Allahabad High Court.
                    Specializing in complex Criminal Defense and Constitutional Law.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 animate-slide-up opacity-0" style={{ animationDelay: "0.8s" }}>
                    <Link
                        href="/consultation"
                        className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-bold text-lg rounded-sm hover:bg-white transition-all shadow-lg shadow-gold-500/10"
                    >
                        Book Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                    >
                        About The Counsel
                    </Link>
                </div>
            </div>
        </section>
    );
}
