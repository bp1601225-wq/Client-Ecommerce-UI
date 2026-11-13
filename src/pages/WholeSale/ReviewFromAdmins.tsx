
import { Link, useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../../src/assets/logo.png";

import {
  CheckCircle2,
  Clock,
  XCircle,
  Ban,
  AlertCircle,
  ArrowRight,
  Home,
  Headset,
  ShieldCheck,
} from "lucide-react";

type AccessResult = {
  email: string;
  accountStatus: string;
  success: boolean;
  role: string;
};

const WholesaleAccessResult = () => {
  const location = useLocation();
  const result = location.state as AccessResult | null;

  if (!result) {
    return <Navigate to="/whole-sale" replace />;
  }

  const status = result.accountStatus?.toUpperCase();
  const approved = status === "APPROVED";

  const statusConfig = {
    APPROVED: {
      title: "You're approved!",
      message:
        "Your wholesale account has been approved. You can now proceed to explore exclusive wholesale products and pricing.",
      icon: CheckCircle2,
      color: "text-amber-500",
      background: "bg-amber-500/10",
      label: "Account Approved",
    },
    PENDING: {
      title: "Application under review",
      message:
        "Your application is currently being reviewed by our team. We'll update you once a decision has been made.",
      icon: Clock,
      color: "text-amber-500",
      background: "bg-amber-500/10",
      label: "Pending Review",
    },
    REJECTED: {
      title: "Application not approved",
      message:
        "Unfortunately, your wholesale application was not approved. Please contact our team if you need further clarification.",
      icon: XCircle,
      color: "text-red-500",
      background: "bg-red-500/10",
      label: "Not Approved",
    },
    SUSPENDED: {
      title: "Account suspended",
      message:
        "Your wholesale account is currently suspended. Please contact our support team for assistance.",
      icon: Ban,
      color: "text-orange-500",
      background: "bg-orange-500/10",
      label: "Suspended",
    },
    INACTIVE: {
      title: "Account unavailable",
      message:
        "Your wholesale account is currently inactive. Please contact our team for assistance.",
      icon: AlertCircle,
      color: "text-gray-400",
      background: "bg-gray-500/10",
      label: "Inactive",
    },
  };

  const config =
    statusConfig[status as keyof typeof statusConfig] ||
    statusConfig.INACTIVE;

  const Icon = config.icon;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-2xl"
      >

        {/* Top Header */}
        <div className="bg-[#111111] px-6 py-5 flex items-center justify-center border-b border-white/10">
          <img
            src={logo}
            alt="MachLuxe Shoes and Bags"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="px-6 py-8 sm:px-9 text-center">

          {/* Status Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className={`w-16 h-16 rounded-full ${config.background} ${config.color} flex items-center justify-center mx-auto mb-4`}
          >
            <Icon size={30} strokeWidth={2} />
          </motion.div>

          {/* Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${config.background} ${config.color}`}
          >
            <ShieldCheck size={13} />
            {config.label}
          </span>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-[#171717] mt-4">
            {config.title}
          </h1>

          <p className="text-sm text-gray-500 leading-6 mt-2 max-w-xs mx-auto">
            {config.message}
          </p>

          {/* Email Details */}
          <div className="mt-6 bg-[#fafafa] border border-gray-100 rounded-lg p-4 text-left">
            <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Registered Email
            </p>

            <p className="text-sm font-medium text-[#222222] break-all">
              {result.email}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-3">

            {approved ? (
              <Link
                to="/whole-sale-dashboard"
                className="w-full bg-[#111111] text-white rounded-lg py-3 px-5 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#fd7e02] hover:text-black transition-colors"
              >
                Visit Wholesale Portal
                <ArrowRight size={17} />
              </Link>
            ) : (
              <Link
                to="/contact"
                className="w-full bg-[#111111] text-white rounded-lg py-3 px-5 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#fd7e02] hover:text-black transition-colors"
              >
                <Headset size={16} />
                Contact MachLuxe
              </Link>
            )}

            <Link
              to="/"
              className="w-full border border-gray-200 text-gray-600 rounded-lg py-3 px-5 font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Home size={16} />
              Return Home
            </Link>

          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#111111] px-5 py-3 text-center">
          <p className="text-[11px] text-gray-400">
            <span className="text-[#fd7e02] font-semibold">MACHLUXE</span>
            {" "}· Shoes and Bags
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default WholesaleAccessResult;
