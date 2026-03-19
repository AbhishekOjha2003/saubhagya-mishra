import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { Calendar, Clock, User, Phone, Check, AlertCircle, XCircle } from "lucide-react";
import { AdminNavbar } from "@/components/admin/AdminNavbar";
import { AppointmentActions } from "@/components/admin/AppointmentActions";

export const dynamic = 'force-dynamic';

const statusConfig: Record<string, { color: string; borderColor: string; icon: any }> = {
    PENDING: { color: "text-amber-500 bg-amber-500/10", borderColor: "border-amber-500/20", icon: AlertCircle },
    CONFIRMED: { color: "text-green-500 bg-green-500/10", borderColor: "border-green-500/20", icon: Check },
    CANCELLED: { color: "text-red-500 bg-red-500/10", borderColor: "border-red-500/20", icon: XCircle },
    COMPLETED: { color: "text-blue-500 bg-blue-500/10", borderColor: "border-blue-500/20", icon: Check },
};

export default async function AdminDashboard() {
    try {
        const appointments = await prisma.appointment.findMany({
            orderBy: { date: 'desc' },
            include: { payment: true }
        });

        const stats = {
            total: appointments.length,
            pending: appointments.filter(a => a.status === "PENDING").length,
            confirmed: appointments.filter(a => a.status === "CONFIRMED").length,
        };

        return (
            <>
                <AdminNavbar />
                <main className="min-h-screen bg-obsidian-950 pt-28 pb-20 px-4">
                    <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                                    <span className="text-gold-600 text-[10px] font-bold tracking-widest uppercase">Admin Portal</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-ivory-50">Dashboard Overview</h1>
                                <p className="text-ivory-100 mt-1">Manage appointments and client interactions</p>
                            </div>
                            <div className="flex gap-4">
                                {[
                                    { label: "Total", value: stats.total, color: "bg-white border-ivory-200/50 text-ivory-50" },
                                    { label: "Pending", value: stats.pending, color: "bg-amber-50 border-amber-200 text-amber-600" },
                                    { label: "Confirmed", value: stats.confirmed, color: "bg-emerald-50 border-emerald-200 text-emerald-600" },
                                ].map((stat, i) => (
                                    <div key={i} className={`px-5 py-3 rounded-xl border shadow-sm ${stat.color}`}>
                                        <span className="text-2xl font-bold block leading-none">{stat.value}</span>
                                        <span className="text-[10px] uppercase tracking-wider font-bold opacity-70">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Appointments Table */}
                        <div className="bg-white border border-ivory-200/60 rounded-2xl shadow-sm overflow-hidden">
                            <div className="px-8 py-6 border-b border-ivory-100/10 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-ivory-50">Recent Appointments</h2>
                                <button className="text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors">
                                    View All
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-obsidian-900/30">
                                        <tr className="text-ivory-100 text-xs font-bold uppercase tracking-widest">
                                            <th className="text-left p-6 font-semibold">Date & Time</th>
                                            <th className="text-left p-6 font-semibold">Client</th>
                                            <th className="text-left p-6 font-semibold">Case Type</th>
                                            <th className="text-left p-6 font-semibold">Duration</th>
                                            <th className="text-left p-6 font-semibold">Status</th>
                                            <th className="text-right p-6 font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-ivory-100/10">
                                        {appointments.map((apt) => {
                                            const status = statusConfig[apt.status] || { color: "text-gray-500", borderColor: "border-gray-200", icon: AlertCircle };
                                            const StatusIcon = status.icon;
                                            return (
                                                <tr key={apt.id} className="hover:bg-obsidian-900/20 transition-colors group">
                                                    <td className="p-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 flex items-center justify-center transition-colors">
                                                                <Calendar className="w-5 h-5 text-gold-600" />
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-ivory-50 text-sm">
                                                                    {format(apt.date, "MMM d, yyyy")}
                                                                </div>
                                                                <div className="text-ivory-100 text-xs flex items-center gap-1 mt-0.5">
                                                                    <Clock className="w-3 h-3" />
                                                                    {format(apt.date, "h:mm a")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-ivory-100/10 flex items-center justify-center">
                                                                <User className="w-5 h-5 text-ivory-100" />
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-ivory-50 text-sm">{apt.clientName}</div>
                                                                <div className="text-ivory-100 text-xs flex items-center gap-1 mt-0.5">
                                                                    <Phone className="w-3 h-3" />
                                                                    {apt.clientPhone}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-6">
                                                        <span className="px-3 py-1 rounded-md bg-obsidian-900 text-ivory-100 font-medium text-xs border border-ivory-200/50">
                                                            {apt.caseType}
                                                        </span>
                                                    </td>
                                                    <td className="p-6">
                                                        <span className="text-ivory-50 text-sm font-medium">{apt.duration} min</span>
                                                    </td>
                                                    <td className="p-6">
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${status.color} ${status.borderColor}`}>
                                                            <StatusIcon className="w-3 h-3" />
                                                            {apt.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-6">
                                                        <div className="flex justify-end">
                                                            <AppointmentActions id={apt.id} status={apt.status} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {appointments.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="p-16 text-center">
                                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-obsidian-900 mb-4">
                                                        <Calendar className="w-8 h-8 text-ivory-200" />
                                                    </div>
                                                    <p className="text-ivory-100 font-medium">No appointments scheduled yet</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    } catch (error) {
        console.error("Dashboard Error:", error);
        return (
            <>
                <AdminNavbar />
                <div className="min-h-screen bg-obsidian-950 pt-28 pb-20 px-4 flex items-center justify-center">
                    <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20 text-center max-w-lg">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
                        <p className="text-white/60 mb-6">We encountered an error while loading the dashboard.</p>
                        <pre className="bg-black/20 p-4 rounded-lg text-left text-xs mb-6 overflow-auto text-red-300">
                            {error instanceof Error ? error.message : "Unknown error"}
                        </pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
