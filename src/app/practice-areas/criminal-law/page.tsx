import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function CriminalLawPage() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}
            <section className="bg-primary text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-4 block">Practice Area</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Criminal Law</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Comprehensive legal defense services ranging from bail applications to complex criminal trials and appeals.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Article */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Defending Your Rights</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Criminal charges can have life-altering consequences. We provide aggressive and strategic representation for individuals facing criminal accusations. Our approach involves a meticulous examination of evidence, procedural lapses, and constitutional rights violations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Bail Matters", desc: "Regular Bail, Anticipatory Bail, Interim Bail in High Court." },
                                { title: "Criminal Appeals", desc: "Challenging convictions and sentences awarded by lower courts." },
                                { title: "Writ Petitions", desc: "Seeking quashing of FIRs under Article 226." },
                                { title: "Trials", desc: "Representation in Sessions Court trials for serious offenses." }
                            ].map((service) => (
                                <div key={service.title} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Early Intervention Matters</h3>
                            <p className="text-blue-800 text-sm leading-relaxed mb-6">
                                Seeking legal counsel at the earliest stage — often before an FIR is even registered — can significantly impact the outcome of a case. We advise clients on pre-arrest strategies and compliance with police notices.
                            </p>
                            <Link href="/consultation" className="text-blue-700 font-semibold text-sm flex items-center hover:underline">
                                Schedule a confidential consultation <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar Navigation */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-primary mb-4 border-b pb-2">Other Practice Areas</h3>
                            <nav className="flex flex-col gap-2">
                                <a href="#" className="flex items-center justify-between p-3 rounded-md bg-slate-50 text-slate-700 font-medium">
                                    Criminal Law <Check className="w-4 h-4 text-secondary" />
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-md text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">
                                    Civil Litigation
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-md text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">
                                    Family Law
                                </a>
                            </nav>
                        </div>

                        <div className="bg-primary text-white p-8 rounded-xl text-center">
                            <h3 className="text-xl font-serif font-bold mb-4">Need Urgent Legal Help?</h3>
                            <p className="text-sm text-gray-300 mb-6">
                                We are available for urgent bail hearings and legal emergencies.
                            </p>
                            <Link href="/consultation" className="inline-block w-full py-3 bg-secondary text-primary font-bold rounded-md hover:bg-yellow-500 transition-colors">
                                Book Consultation
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
