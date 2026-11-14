
import { Button } from "@mui/material";
import { ImagePlus, PackagePlus } from "lucide-react";

const AdminProducts = () => {
  const inputStyle =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 !text-sm";

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
            Add New Product
          </h2>
          <p className="text-xs text-gray-500">
            Product details and pricing
          </p>
        </div>
      </div>

      {/* Product Information */}
      <section className="space-y-3">
        <h3 className="border-l-2 border-amber-500 pl-2 text-sm font-semibold text-gray-900">
          Product Information
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className={labelStyle}>Product Name</label>
            <input
              type="text"
              placeholder="Product name"
              className={inputStyle}
            />
          </div>

          {/* <div>
            <label className={labelStyle}>SKU</label>
            <input
              type="text"
              placeholder="Product SKU"
              className={inputStyle}
            />
          </div> */}

          <div>
            <label className={labelStyle}>Category</label>
            <select className={inputStyle} defaultValue="">
              <option value="" disabled>Select category</option>
              <option value="shoes">Shoes</option>
              <option value="bags">Bags</option>
            </select>
          </div>

       
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-3">
        <h3 className="border-l-2 border-amber-500 pl-2 text-sm font-semibold text-gray-900">
          Product Pricing
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className={labelStyle}>Retail Price (GH₵)</label>
            <input
              type="number"
              placeholder="0.00"
              className={inputStyle}
            />
          </div>

          <div>
            <label className={labelStyle}>Wholesale Price (GH₵)</label>
            <input
              type="number"
              placeholder="0.00"
              className={inputStyle}
            />
          </div>
        </div>
      </section>

   <div className="sm:col-span-2 lg:col-span-3">
            <label className={labelStyle}>Description</label>
            <textarea
              rows={5}
              placeholder="Product description..."
              className={inputStyle + " resize-none"}
            />
          </div>

      {/* Images */}
      <section className="space-y-3">
        <h3 className="border-l-2 border-amber-500 pl-2 text-sm font-semibold text-gray-900">
          Product Images
        </h3>

        <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-gray-300 bg-gray-50 px-4 py-4 transition hover:border-amber-500 hover:bg-amber-50/40">
          <ImagePlus size={22} className="shrink-0 text-amber-600" />

          <div>
            <p className="text-sm font-medium text-gray-800">
              Upload images
            </p>
            <p className="text-xs text-gray-500">
              Select multiple product images
            </p>
          </div>

          <span className="ml-auto text-xs font-semibold text-amber-700">
            Browse
          </span>

          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
          />
        </label>
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
  Save Product
</Button>
      </div>
    </div>
  );
};

export default AdminProducts;
