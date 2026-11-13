
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  Store,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WholesaleApplicationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 py-12 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
      >

        {/* Header */}
        <div className="bg-[#111111] px-6 py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fd7e02]">
            <CheckCircle2 size={34} className="text-white" />
          </div>

          <h1 className="text-xl font-bold text-white">
            Application Submitted!
          </h1>

          <p className="mt-2 text-sm text-gray-300">
            Thank you for your interest in becoming a MachLuxe wholesale partner.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6">

          <div className="text-center">
            <h2 className="text-base font-bold text-[#111111]">
              Your application is under review
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              We have successfully received your wholesale application.
              Our team will review your business information and contact
              you once a decision has been made.
            </p>
          </div>

          {/* Application Status */}
          <div className="rounded-lg border border-orange-100 bg-orange-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Clock size={20} className="text-[#fd7e02]" />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Application Status
                </p>
                <p className="mt-0.5 text-sm font-bold text-[#111111]">
                  Pending Review
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-[#111111]">
              What happens next?
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  <ShieldCheck size={17} className="text-[#fd7e02]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Application Review
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Our team will assess your business details and wholesale eligibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  <Mail size={17} className="text-[#fd7e02]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Approval Notification
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    You will be contacted by email or phone once your application has been reviewed.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  <Store size={17} className="text-[#fd7e02]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Access Your Wholesale Account
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Once approved, you will receive instructions to access your wholesale account and explore exclusive products and pricing.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs leading-5 text-gray-500">
              Have questions about your application? Our team will be happy to assist you.
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#111111]">
              <Phone size={14} className="text-[#fd7e02]" />
              Contact MachLuxe Support
            </div>
          </div>

          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowRight size={16} />}
            onClick={() => navigate("/")}
            sx={{
              py: 1.4,
              borderRadius: "8px",
              backgroundColor: "#111111",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#fd7e02",
                color: "#111111",
                boxShadow: "none",
              },
            }}
          >
            Back to MachLuxe
          </Button>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 text-center">
          <p className="text-[11px] font-medium text-gray-500">
            Thank you for choosing{" "}
            <span className="font-bold text-[#111111]">
              MachLuxe
            </span>
          </p>
          <p className="mt-1 text-[10px] text-gray-400">
            Shoes & Bags · Wholesale Partnerships
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default WholesaleApplicationSuccess;
