
import { Button } from "@mui/material";
import { PackagePlus } from "lucide-react";

const AdminInventory = () => {
  const inputStyle =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-1 !text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

  const labelStyle = "mb-1 block text-xs font-medium text-gray-700";

  return (
    <div className="max-w-5xl space-y-5 p-2">

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
        <div className="rounded-md bg-amber-100 p-2 text-amber-700">
          <PackagePlus size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Add Inventory
          </h2>
          <p className="text-xs text-gray-500">
            Assign initial stock to a product.
          </p>
        </div>
      </div>

      {/* Inventory Information */}
      <section className="space-y-3">
        <h3 className="border-l-2 border-amber-500 pl-2 text-sm font-semibold text-gray-900">
          Inventory Information
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <label className={labelStyle}>Product</label>
            <select className={inputStyle} defaultValue="">
              <option value="" disabled>Select product</option>
              <option value="product1">Classic White Sneakers</option>
              <option value="product2">Premium Leather Shoes</option>
              <option value="product3">Ladies Handbag</option>
            </select>
          </div>

          <div>
            <label className={labelStyle}>Quantity</label>
            <input
              type="number"
              min="0"
              placeholder="Enter available quantity"
              className={inputStyle}
            />
          </div>

        </div>
      </section>

      {/* Actions */}
      <div className="flex justify-end gap-2 border-t border-gray-200 pt-3">
        <button
          type="button"
          className="rounded-md px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

        <Button
          type="button"
          variant="contained"
          sx={{
            backgroundColor: "#F59E0B",
            color: "#000",
            textTransform: "none",
            fontSize: "12px",
            fontWeight: 600,
            borderRadius: "6px",
            boxShadow: "none",
            px: 2.5,
            "&:hover": {
              backgroundColor: "#D97706",
              boxShadow: "none",
            },
          }}
        >
          Save Inventory
        </Button>
      </div>
    </div>
  );
};

export default AdminInventory;
