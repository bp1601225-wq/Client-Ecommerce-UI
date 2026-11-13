
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Package,
  UserRound,
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

import { Button, TextField } from "@mui/material";
import RightPanel from "../../components/Panel/RightPanel";
import { useWholeSaleStore } from "../../components/ZustandShare/WholeSaleZuts";

type ApplicantDetailsPanelProps = {
  selectedApplicant: any;
  setSelectedApplicant: (value: any) => void;
  onApprove?: (applicant: any, message: string) => void;
  onReject?: (applicant: any, message: string) => void;
};

const ApplicantDetailsPanel = ({
  selectedApplicant,
  setSelectedApplicant,
//   onApprove,
//   onReject,
}: ApplicantDetailsPanelProps) => {
  const [decision, setDecision] = useState<"approve" | "reject" | null>(
    null
  );

  const [decisionMessage, setDecisionMessage] = useState("");

// console.log(selectedApplicant)

const {ApproveWholeSale} = useWholeSaleStore()


  const handleDecision = async () => {
    if (!decisionMessage.trim() || !selectedApplicant) return;

    if (decision === "approve") {


const ApprovalPayload = {
        id: selectedApplicant.id,
        message:decision,       
}

await ApproveWholeSale(ApprovalPayload)

// console.log(ApprovalPayload)


    }

    if (decision === "reject") {
    }

    setDecision(null);
    setDecisionMessage("");
  };

  const handleClose = () => {
    setDecision(null);
    setDecisionMessage("");
    setSelectedApplicant(null);
  };

  const details = [
    {
      label: "Email address",
      value: selectedApplicant?.email,
      icon: Mail,
    },
    {
      label: "Phone number",
      value: selectedApplicant?.phoneNumber,
      icon: Phone,
    },
    {
      label: "Business type",
      value: selectedApplicant?.businessType,
      icon: BriefcaseBusiness,
    },
    {
      label: "Expected order volume",
      value: selectedApplicant?.expectedOrderVolume,
      icon: Package,
    },
    {
      label: "Business location",
      value: selectedApplicant?.businessLocation,
      icon: MapPin,
    },
    {
      label: "Account status",
      value: selectedApplicant?.accountStatus,
      icon: ShieldCheck,
    },
    {
      label: "Date registered",
      value: selectedApplicant?.createdAt
        ? new Date(selectedApplicant.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : undefined,
      icon: CalendarDays,
    },
  ];

  const isPending =
    selectedApplicant?.accountStatus?.toLowerCase() === "pending";

  return (
    <RightPanel
      open={selectedApplicant !== null}
      title={selectedApplicant?.businessName || "Wholesale applicant"}
      onClose={handleClose}
    >
      {selectedApplicant && (
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-6 pb-5"
        >
          {/* Applicant Header */}
          <div className="relative overflow-hidden rounded-xl bg-[#171717] p-5 text-white">
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-black">
                <UserRound size={23} />
              </div>

              <div className="min-w-0">
                <p className="text-base font-semibold">
                  {selectedApplicant.fullName}
                </p>

                <p className="mt-1 truncate text-xs text-gray-400">
                  {selectedApplicant.businessName ||
                    "Business name not provided"}
                </p>
              </div>
            </div>

            <div className="relative mt-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Wholesale application
              </span>

              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-semibold capitalize text-amber-400">
                {String(
                  selectedApplicant.accountStatus || "Pending"
                ).replaceAll("_", " ")}
              </span>
            </div>
          </div>

          {/* Applicant Information */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Building2 size={16} className="text-amber-600" />

              <h3 className="text-sm font-semibold text-gray-900">
                Applicant information
              </h3>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {details.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                    }}
                    className="rounded-lg bg-gray-50 p-3 transition-colors hover:bg-amber-50/60"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon size={14} className="text-amber-600" />

                      <span className="text-[11px] font-medium text-gray-500">
                        {item.label}
                      </span>
                    </div>

                    <p className="break-words text-sm font-medium capitalize text-gray-900">
                      {item.value
                        ? String(item.value).replaceAll("_", " ")
                        : "Not provided"}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Business Description */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <FileText size={16} className="text-amber-600" />

              <h3 className="text-sm font-semibold text-gray-900">
                Business description
              </h3>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <p className="whitespace-pre-wrap text-sm leading-6 text-gray-600">
                {selectedApplicant.businessDescription ||
                  "No business description provided."}
              </p>
            </div>
          </section>

          {/* Application Decision */}
       
{/* Application Decision */}
<section className="space-y-5 pt-3">
  <div className="flex items-center gap-2">
    <ShieldCheck size={15} className="text-amber-600" />
    <h3 className="text-sm font-semibold text-gray-900">
      Application decision
    </h3>
  </div>

  {isPending ? (
    <>
      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          variant="contained"
          size="small"
          startIcon={<CheckCircle2 size={14} />}
          onClick={() => {
            setDecision("approve");
            setDecisionMessage("");
          }}
          sx={{
            minWidth: 115,
            px: 2,
            py: 0.85,
            borderRadius: "7px",
            bgcolor: "#F59E0B",
            color: "#171717",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#D97706",
              boxShadow: "none",
            },
          }}
        >
          Approve
        </Button>

        <Button
          variant="text"
          size="small"
          startIcon={<XCircle size={14} />}
          onClick={() => {
            setDecision("reject");
            setDecisionMessage("");
          }}
          sx={{
            minWidth: 105,
            px: 2,
            py: 0.85,
            borderRadius: "7px",
            bgcolor: "#FEF2F2",
            color: "#DC2626",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#FEE2E2",
            },
          }}
        >
          Reject
        </Button>

            <Button
          variant="text"
          size="small"
          startIcon={<XCircle size={14} />}
          onClick={() => {
       
          }}
          sx={{
            minWidth: 105,
            px: 2,
            py: 0.85,
            borderRadius: "7px",
            bgcolor: "#ffffff",
            color: "black",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#b0b0b0",
            },
          }}
        >
          Close Panel
        </Button>
      </div>

      {/* Decision Message */}
      <AnimatePresence mode="wait">
        {decision && (
          <motion.div
            key={decision}
            initial={{ opacity: 0, height: 0, y: 8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 rounded-xl bg-gray-50/80 p-4">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">
                  {decision === "approve"
                    ? "Approve wholesale application"
                    : "Reject wholesale application"}
                </p>

                <p className="text-xs leading-5 text-gray-500">
                  {decision === "approve"
                    ? "Add a message to welcome the applicant to MachLuxe."
                    : "Provide a clear reason for rejecting this application."}
                </p>
              </div>

              <TextField
                fullWidth
                multiline
                minRows={10}
                maxRows={15}
                size="small"
                value={decisionMessage}
                onChange={(e) => setDecisionMessage(e.target.value)}
                placeholder={
                  decision === "approve"
                    ? "Write approval message..."
                    : "Write rejection reason..."
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#fff",
                    borderRadius: "8px",
                    fontSize: "12px",
                    margin:"3px"
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#E5E7EB",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#D97706",
                    },
                }}
              />

              <div className="flex items-center gap-3">
                <Button
                  size="small"
                  variant="contained"
                  disabled={!decisionMessage.trim()}
                  onClick={handleDecision}
                  sx={{
                    px: 2.5,
                    py: 0.85,
                    borderRadius: "7px",
                    bgcolor:
                      decision === "approve" ? "#F59E0B" : "#DC2626",
                    color: decision === "approve" ? "#171717" : "#fff",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor:
                        decision === "approve" ? "#D97706" : "#B91C1C",
                      boxShadow: "none",
                    },
                  }}
                >
                  Confirm & Send
                </Button>

                <Button
                  size="small"
                  onClick={() => {
                    setDecision(null);
                    setDecisionMessage("");
                  }}
                  sx={{
                    fontSize: "11px",
                    textTransform: "none",
                    color: "#6B7280",
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  ) : (
    <div className="rounded-lg bg-gray-50 p-4">
      <p className="text-xs text-gray-500">
        This application has already been processed.
      </p>
    </div>
  )}
</section>

        </motion.div>
      )}
    </RightPanel>
  );
};

export default ApplicantDetailsPanel;
