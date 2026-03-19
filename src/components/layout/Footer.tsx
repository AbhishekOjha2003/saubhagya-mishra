import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-obsidian-900 border-t border-ivory-100/5">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                                <Scale className="w-6 h-6 text-obsidian-950" />
                            </div>
                            <div>
                                <span className="block font-serif text-xl font-bold text-ivory-50">Saubhagya Mishra | सौभाग्य मिश्रा</span>
                                <span className="block text-[10px] uppercase tracking-[0.15em] text-gold-500">Advocate • Enrolment No. 5506/2020</span>
                            </div>
                        </Link>
                        <p className="text-ivory-100/50 text-sm leading-relaxed mb-6">
                            Dedicated to upholding the principles of justice with integrity and strategic expertise at the High Court of Judicature.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-ivory-100/5 flex items-center justify-center text-ivory-100/60 hover:bg-gold-500 hover:text-obsidian-950 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Practice Areas</h4>
                        <ul className="space-y-3">
                            {["Criminal Defense", "Constitutional Law", "Civil Litigation", "Family Law", "Corporate Advisory"].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-ivory-100/60 hover:text-gold-400 transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {["About", "Consultation", "Blog", "Contact", "Privacy Policy"].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-ivory-100/60 hover:text-gold-400 transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Contact Office</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-ivory-100/60 text-sm">
                                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                                <span>Chamber No. 29, Block A,<br />Allahabad High Court / इलाहाबाद उच्च न्यायालय</span>
                            </li>
                            <li className="flex gap-3 text-ivory-100/60 text-sm">
                                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                                <span>+91 8795276040</span>
                            </li>
                            <li className="flex gap-3 text-ivory-100/60 text-sm">
                                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                                <span>consult@advocatemishra.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-ivory-100/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory-100/40">
                    <p>© {new Date().getFullYear()} Advocate Saubhagya Mishra. All Rights Reserved.</p>
                    <p className="text-center md:text-right max-w-lg">
                        <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice. No lawyer-client relationship is formed by visiting this site.
                    </p>
                </div>
            </div>
        </footer>
    );
}
