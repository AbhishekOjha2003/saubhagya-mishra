"use client";

import { useState, useEffect } from "react";
import { getAvailableSlots, createBooking, processPayment } from "@/app/_actions/booking";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, User, Mail, Phone, FileText, ArrowLeft, ArrowRight, Loader2, Calendar as CalendarIcon, Shield, AlertCircle, CreditCard, Lock } from "lucide-react";
import { format, addDays, startOfToday } from "date-fns";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const caseTypes = [
    "Criminal Defense",
    "Bail Application",
    "Civil Dispute",
    "Constitutional Matter",
    "Family Law",
    "Corporate Legal",
    "Other"
];

export default function ConsultationPage() {
    const [step, setStep] = useState(1);

    // Date Selection Logic (Horizontal Scroll)
    const today = startOfToday();
    const next14Days = Array.from({ length: 14 }, (_, i) => addDays(today, i));
    const [selectedDate, setSelectedDate] = useState<Date>(today);

    const [duration, setDuration] = useState(15);
    const [slots, setSlots] = useState<string[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);

    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", caseType: "Criminal Defense", summary: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [bookingResult, setBookingResult] = useState<{ success: boolean; bookingId?: string } | null>(null);

    // Fetch slots when date or duration changes
    useEffect(() => {
        async function loadSlots() {
            setIsLoadingSlots(true);
            const dateStr = format(selectedDate, 'yyyy-MM-dd');
            const s = await getAvailableSlots(dateStr, duration);
            setSlots(s);
            setSelectedSlot(null);
            setIsLoadingSlots(false);
        }
        loadSlots();
    }, [selectedDate, duration]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const res = await createBooking({
            ...formData,
            slot: selectedSlot!,
            duration
        });

        setIsSubmitting(false);

        if (res.success && res.bookingId) {
            setBookingResult(res);
            setStep(3); // Go to Payment Step
        } else {
            alert("Booking failed. Please try again.");
        }
    };

    const handlePayment = async () => {
        if (!bookingResult?.bookingId) return;
        setIsProcessingPayment(true);

        // Call server action to process/verify payment
        const res = await processPayment(bookingResult.bookingId);

        // Add fake delay for realism if server is too fast
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessingPayment(false);

        if (res.success) {
            setStep(4); // Go to Success Step
        } else {
            alert("Payment failed. Please try again.");
        }
    };

    const price = duration === 15 ? 1000 : 1500;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-obsidian-950 pt-32 pb-20 px-4 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-obsidian-900 to-transparent pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm mb-4">
                            <Shield className="w-3 h-3 text-gold-500" />
                            <span className="text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase">Secure Consultation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-ivory-50 mb-4">
                            Schedule Your <span className="text-gradient-gold">Legal Strategy</span>
                        </h1>
                        <p className="text-ivory-100/50 text-lg max-w-xl mx-auto">
                            Confidential, direct consultation with Advocate Mishra to discuss your case merits and defense strategy.
                        </p>
                    </motion.div>

                    {/* Progress Steps */}
                    <div className="hidden md:flex items-center justify-center gap-4 mb-16">
                        {[
                            { step: 1, label: "Time & Date" },
                            { step: 2, label: "Details" },
                            { step: 3, label: "Payment" },
                            { step: 4, label: "Confirmation" }
                        ].map((s, i) => (
                            <div key={s.step} className="flex items-center gap-4">
                                <div className={`flex items-center gap-2 ${step >= s.step ? "opacity-100" : "opacity-40"}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all border ${step >= s.step
                                            ? "bg-gold-500 border-gold-500 text-obsidian-950"
                                            : "bg-transparent border-ivory-100/30 text-ivory-100"
                                        }`}>
                                        {step > s.step ? <CheckCircle2 className="w-5 h-5" /> : s.step}
                                    </div>
                                    <span className={`text-sm font-medium ${step >= s.step ? "text-gold-500" : "text-ivory-100"}`}>{s.label}</span>
                                </div>
                                {i < 3 && <div className="w-8 h-[1px] bg-ivory-100/10" />}
                            </div>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <motion.div
                        layout
                        className="bg-obsidian-900/40 backdrop-blur-md border border-ivory-100/10 rounded-3xl overflow-hidden shadow-2xl relative"
                    >
                        {/* Shimmer Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent pointer-events-none" />

                        <div className="p-8 md:p-12">
                            <AnimatePresence mode="wait">

                                {/* Step 1: Select Slot */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-10"
                                    >
                                        {/* Duration Selection */}
                                        <div>
                                            <h3 className="text-ivory-50 font-serif text-xl mb-6 flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-gold-500" /> Choose Duration
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {[15, 30].map((d) => (
                                                    <button
                                                        key={d}
                                                        onClick={() => setDuration(d)}
                                                        className={`group relative p-6 rounded-2xl border-2 text-left transition-all ${duration === d
                                                            ? "border-gold-500 bg-gold-500/10"
                                                            : "border-ivory-100/5 bg-obsidian-950/30 hover:border-gold-500/30"
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-start mb-2">
                                                            <span className={`text-3xl font-bold ${duration === d ? "text-ivory-50" : "text-ivory-100/60"}`}>
                                                                {d} <span className="text-sm font-normal text-ivory-100/40">mins</span>
                                                            </span>
                                                            {duration === d && <div className="w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />}
                                                        </div>
                                                        <div className={`text-lg font-medium mb-1 ${duration === d ? "text-gold-400" : "text-gold-500/80"}`}>
                                                            ₹{d === 15 ? "1,000" : "1,500"}
                                                        </div>
                                                        <p className="text-xs text-ivory-100/40 leading-relaxed">
                                                            {d === 15 ? "Best for quick legal advice or second opinions." : "Detailed case analysis and strategy discussion."}
                                                        </p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Date Selection - Horizontal Scroll */}
                                        <div>
                                            <h3 className="text-ivory-50 font-serif text-xl mb-6 flex items-center gap-2">
                                                <CalendarIcon className="w-5 h-5 text-gold-500" /> Select Date
                                            </h3>
                                            <div className="relative">
                                                {/* Gradient Fade Masks */}
                                                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-obsidian-900 via-obsidian-900/80 to-transparent z-10 pointer-events-none md:hidden" />
                                                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-obsidian-900 via-obsidian-900/80 to-transparent z-10 pointer-events-none md:hidden" />

                                                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                                                    {next14Days.map((d, i) => {
                                                        const isSelected = format(d, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                                                        return (
                                                            <button
                                                                key={i}
                                                                onClick={() => setSelectedDate(d)}
                                                                className={`flex-shrink-0 w-20 p-3 rounded-xl border transition-all flex flex-col items-center justify-center gap-1 ${isSelected
                                                                    ? "bg-gold-500 border-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                                                    : "bg-obsidian-950/30 border-ivory-100/10 hover:border-gold-500/30 text-ivory-100/60"
                                                                    }`}
                                                            >
                                                                <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? "text-obsidian-950" : ""}`}>
                                                                    {format(d, "EEE")}
                                                                </span>
                                                                <span className={`text-xl font-bold ${isSelected ? "text-obsidian-950" : "text-ivory-50"}`}>
                                                                    {format(d, "d")}
                                                                </span>
                                                                <span className={`text-[10px] ${isSelected ? "text-obsidian-900" : "text-ivory-100/30"}`}>
                                                                    {format(d, "MMM")}
                                                                </span>
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Available Slots */}
                                        <div>
                                            <h3 className="text-ivory-50 font-serif text-xl mb-6">Available Time Slots</h3>
                                            {isLoadingSlots ? (
                                                <div className="flex flex-col items-center justify-center py-12 text-ivory-100/40 gap-3">
                                                    <Loader2 className="w-6 h-6 animate-spin text-gold-500" />
                                                    <span className="text-sm">Checking availability...</span>
                                                </div>
                                            ) : slots.length === 0 ? (
                                                <div className="flex flex-col items-center justify-center py-10 rounded-2xl border border-ivory-100/5 bg-obsidian-950/20 text-center">
                                                    <AlertCircle className="w-8 h-8 text-ivory-100/20 mb-3" />
                                                    <p className="text-ivory-100/50">No slots available on this date.</p>
                                                    <p className="text-sm text-gold-500/60 mt-1">Please try selecting another day.</p>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 small:grid-cols-3 md:grid-cols-4 gap-3">
                                                    {slots.map((slot, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => setSelectedSlot(slot)}
                                                            className={`relative py-3 px-4 rounded-xl border text-sm font-medium transition-all ${selectedSlot === slot
                                                                ? "bg-gradient-to-br from-gold-500 to-gold-600 border-gold-500 text-obsidian-950 font-bold shadow-lg shadow-gold-900/20"
                                                                : "bg-obsidian-950/40 border-ivory-100/10 text-ivory-100 hover:border-gold-500/50 hover:text-gold-400"
                                                                }`}
                                                        >
                                                            {format(new Date(slot), "h:mm a")}
                                                            {selectedSlot === slot && (
                                                                <motion.div
                                                                    layoutId="selected-indicator"
                                                                    className="absolute inset-0 rounded-xl border-2 border-white/20 pointer-events-none"
                                                                />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            disabled={!selectedSlot}
                                            onClick={() => setStep(2)}
                                            className="w-full py-4 bg-gold-500 text-obsidian-950 font-bold text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 mt-4"
                                        >
                                            Continue to Details <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </motion.div>
                                )}

                                {/* Step 2: Client Details */}
                                {step === 2 && (
                                    <motion.form
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        {/* Brief Summary */}
                                        <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center gap-4 text-sm">
                                            <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center shrink-0">
                                                <CalendarIcon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-ivory-50 font-bold">
                                                    {selectedSlot && format(new Date(selectedSlot), "EEEE, MMM d")} • {format(new Date(selectedSlot!), "h:mm a")}
                                                </div>
                                                <div className="text-ivory-100/40">Enter your details to proceed to payment</div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory-100/30" />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all placeholder:text-ivory-100/20"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Phone Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory-100/30" />
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all placeholder:text-ivory-100/20"
                                                        placeholder="10 digit mobile number"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory-100/30" />
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-4 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all placeholder:text-ivory-100/20"
                                                    placeholder="For booking confirmation"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Nature of Case</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.caseType}
                                                    onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                                                    className="w-full px-4 py-4 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none appearance-none transition-all"
                                                >
                                                    {caseTypes.map((type) => (
                                                        <option key={type} value={type} className="bg-obsidian-900 text-ivory-50">{type}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gold-500 uppercase tracking-widest pl-1">Case Description (Optional)</label>
                                            <div className="relative">
                                                <FileText className="absolute left-4 top-4 w-5 h-5 text-ivory-100/30" />
                                                <textarea
                                                    rows={4}
                                                    value={formData.summary}
                                                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-4 bg-obsidian-950/50 border border-ivory-100/10 rounded-xl text-ivory-50 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all resize-none placeholder:text-ivory-100/20"
                                                    placeholder="Briefly describe your situation so we can prepare ahead..."
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-ivory-100/5">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="px-8 py-4 border border-ivory-100/20 text-ivory-100 rounded-xl hover:bg-ivory-100/5 transition-colors flex items-center gap-2 font-medium"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 py-4 bg-gold-500 text-obsidian-950 font-bold text-lg rounded-xl disabled:opacity-50 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Creating Booking...
                                                    </>
                                                ) : (
                                                    <>Proceed to Payment</>
                                                )}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}

                                {/* Step 3: Payment */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="max-w-md mx-auto"
                                    >
                                        <div className="text-center mb-8">
                                            <h2 className="text-3xl font-serif text-ivory-50 mb-2">Secure Payment</h2>
                                            <p className="text-ivory-100/50">Complete payment to confirm your slot.</p>
                                        </div>

                                        <div className="bg-obsidian-950/50 rounded-2xl p-6 border border-ivory-100/10 mb-8 space-y-4">
                                            <div className="flex justify-between items-center pb-4 border-b border-ivory-100/5">
                                                <span className="text-ivory-100/70">Consultation Fee</span>
                                                <span className="text-ivory-50 text-lg">₹{price.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center pb-4 border-b border-ivory-100/5">
                                                <span className="text-ivory-100/70">GST (18%)</span>
                                                <span className="text-ivory-50 text-lg">₹{(price * 0.18).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-2">
                                                <span className="text-lg font-bold text-gold-500">Total Payable</span>
                                                <span className="text-2xl font-bold text-gold-500">₹{(price * 1.18).toLocaleString()}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handlePayment}
                                            disabled={isProcessingPayment}
                                            className="w-full py-5 bg-gold-500 text-obsidian-950 font-bold text-lg rounded-xl hover:bg-gold-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-3 mb-6"
                                        >
                                            {isProcessingPayment ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Processing Securely...
                                                </>
                                            ) : (
                                                <>
                                                    <Lock className="w-5 h-5" /> Pay Now
                                                </>
                                            )}
                                        </button>

                                        <div className="flex items-center justify-center gap-4 opacity-50 grayscale">
                                            {/* Dummy Cards Icons (Text/SVGs usually) */}
                                            <span className="text-xs text-ivory-100/50">Secured by Razorpay/Cashfree</span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 4: Success */}
                                {step === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                                        </div>

                                        <h2 className="text-4xl font-serif font-bold text-ivory-50 mb-4">Payment Successful!</h2>
                                        <p className="text-ivory-100/60 text-lg mb-8 max-w-lg mx-auto">
                                            Your appointment has been confirmed. A receipt and meeting details have been sent to <strong>{formData.email}</strong>.
                                        </p>

                                        <div className="inline-block px-6 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 font-mono mb-12">
                                            Booking ID: <span className="font-bold">{bookingResult?.bookingId}</span>
                                        </div>

                                        <div className="max-w-md mx-auto p-8 rounded-2xl bg-obsidian-950/50 border border-ivory-100/10 text-left mb-10">
                                            <h3 className="text-gold-500 font-bold uppercase text-xs tracking-widest mb-6 border-b border-ivory-100/10 pb-4">What Happens Next?</h3>
                                            <ul className="space-y-6">
                                                <li className="flex gap-4">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-sm font-bold border border-gold-500/30">1</span>
                                                    <div>
                                                        <div className="text-ivory-50 font-medium text-sm">Confirmation Email</div>
                                                        <div className="text-ivory-100/40 text-xs mt-1">Check your inbox for meeting link and payment receipt.</div>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-sm font-bold border border-gold-500/30">2</span>
                                                    <div>
                                                        <div className="text-ivory-50 font-medium text-sm">Prepare for Consultation</div>
                                                        <div className="text-ivory-100/40 text-xs mt-1">Gather any relevant documents or questions for your session.</div>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center text-sm font-bold border border-gold-500/30">3</span>
                                                    <div>
                                                        <div className="text-ivory-50 font-medium text-sm">Consultation Day</div>
                                                        <div className="text-ivory-100/40 text-xs mt-1">Join the video call or visit our office at the scheduled time.</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <a
                                            href="/"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian-800 border border-ivory-100/20 text-ivory-100 font-bold rounded-xl hover:bg-gold-500 hover:text-obsidian-950 hover:border-gold-500 transition-all font-serif"
                                        >
                                            Return to Homepage
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
