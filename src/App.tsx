
import { Toaster } from "sonner";
import { AppRoutes } from "./routes/AppRoutes";
import "../src/index.css";

function App() {
  return (
    <>
      <AppRoutes />

      <Toaster
        position="top-right"
        richColors
        closeButton
        theme="light"
        toastOptions={{
          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid #fd7e02",
            borderRadius: "10px",
            padding: "14px 16px",
          },
          classNames: {
            title: "font-semibold text-white",
            description: "text-gray-300",
            closeButton: "bg-white/10 text-white border-white/20",
            success: "border-l-4 border-l-[#fd7e02]",
            error: "border-l-4 border-l-red-500",
            warning: "border-l-4 border-l-[#fd7e02]",
            info: "border-l-4 border-l-blue-500",
          },
        }}
      />
    </>
  );
}

export default App;
