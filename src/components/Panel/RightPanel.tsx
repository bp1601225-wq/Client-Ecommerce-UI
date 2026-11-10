import { X } from "lucide-react";

type RightPanelProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

function RightPanel({
  open,
  title,
  onClose,
  children,
}: RightPanelProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0
          bg-[#14213D]/30
          z-[100]
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Right Panel */}
      <div
        className={`
          fixed top-0 right-0
          h-screen
          w-full
          sm:w-[90%]
          md:w-[80%]
          lg:w-[65%]
          bg-[#FFFFFF]
          shadow-2xl
          z-[110]
          transition-transform
          duration-300
          ease-in-out
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-4">
          <h2 className="text-lg font-semibold text-[#14213D]">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="
              flex items-center justify-center
              rounded-md
              p-2
              text-[#64748B]
              hover:bg-[#F8FAFC]
              hover:text-[#14213D]
              transition-colors
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Panel Content */}
        <div className="h-[calc(100vh-65px)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </>
  );
}

export default RightPanel;

