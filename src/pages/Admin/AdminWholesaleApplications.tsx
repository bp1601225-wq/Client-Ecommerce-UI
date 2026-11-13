
import { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import {
RefreshCw,
Users,
LoaderCircle,
Store,
} from "lucide-react";
import { useWholeSaleStore } from "../../components/ZustandShare/WholeSaleZuts";
import RightPanel from "../../components/Panel/RightPanel";
import type { UserType } from "../../GlobalTypes";
import ApplicantDetailsPanel from "./ApplicationDetailsPanel";

const AdminWholesaleApplications = () => {
const { WholeSales, GetWholeSales } = useWholeSaleStore();
const [loading, setloading] = useState(false);
const [selectedApplicant, setSelectedApplicant] = useState<UserType | null>(null);

async function LoadAllWholesaleCustomers() {
try {
setloading(true);
await GetWholeSales();
} finally {
setloading(false);
}
}

useEffect(() => {
LoadAllWholesaleCustomers();
}, []);

const columns: GridColDef<UserType>[] = [
{
field: "fullName",
headerName: "Full Name",
flex: 1,
minWidth: 160,
},
{
field: "businessName",
headerName: "Business Name",
flex: 1,
minWidth: 170,
},
{
field: "email",
headerName: "Business Email",
flex: 1,
minWidth: 200,
},
{
field: "phoneNumber",
headerName: "Phone Number",
minWidth: 140,
},
{
field: "businessType",
headerName: "Business Type",
minWidth: 145,
valueFormatter: (value) =>
value ? String(value).replaceAll("_", " ") : "—",
},
{
field: "expectedOrderVolume",
headerName: "Expected Volume",
minWidth: 155,
valueFormatter: (value) =>
value ? String(value).replaceAll("_", " ") : "—",
},
{
field: "businessLocation",
headerName: "Location",
minWidth: 155,
},
{
field: "createdAt",
headerName: "Date Registered",
minWidth: 150,
renderCell: (params) =>
params.value
? new Date(params.value).toLocaleDateString()
: "—",
},
];

return (
<div className="space-y-4 text-[13px] text-black">

{/* Header */}
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-base font-bold text-[#111111]">
  Wholesale Applicants
</h2>
<p className="mt-1 text-sm text-gray-500">
  View and manage registered wholesale Applicants
</p>
</div>

<button
type="button"
onClick={LoadAllWholesaleCustomers}
disabled={loading}
className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-[#fd7e02] hover:bg-orange-50 disabled:opacity-50"
>
<RefreshCw
  size={14}
  className={loading ? "animate-spin text-[#fd7e02]" : ""}
/>
Refresh
</button>
</div>

{/* Total Customers */}
<div className="flex items-center gap-3 rounded-md border border-gray-100 bg-white p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-50">
<Store size={19} className="text-[#fd7e02]" />
</div>

<div>
<p className="text-xs font-medium text-gray-500">
  Total Wholesale Applicants
</p>
<p className="mt-0.5 text-xl font-bold text-[#111111]">
  {WholeSales.length}
</p>
</div>
</div>

{/* Loader */}
{loading && (
<div className="flex flex-col items-center justify-center gap-3 rounded-md border border-gray-100 bg-white py-16">
<div className="relative flex h-11 w-11 items-center justify-center">
  <div className="absolute h-11 w-11 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#fd7e02]" />
  <LoaderCircle size={20} className="text-black" />
</div>

<div className="text-center">
  <p className="text-sm font-semibold text-black">
    Loading wholesale Applicants
  </p>
  <p className="mt-1 text-xs text-gray-400">
    Please wait...
  </p>
</div>
</div>
)}

{/* Empty State */}
{!loading && WholeSales.length === 0 && (
<div className="flex flex-col items-center gap-2 rounded-md border border-gray-100 bg-white py-16">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
  <Users size={23} className="text-[#fd7e02]" />
</div>

<p className="mt-1 text-base font-bold text-[#111111]">
  No wholesale customers found
</p>

<p className="text-sm text-gray-500">
  Approved wholesale customers will appear here.
</p>
</div>
)}

{/* Customers Table */}
{!loading && WholeSales.length > 0 && (
<div className="overflow-hidden rounded-md border border-gray-200 bg-white">
<DataGrid
  rows={WholeSales}
  columns={columns}
  // getRowId={(row) => row.id ?? row.email}
  onRowClick={(params) => setSelectedApplicant(params.row)}
  disableRowSelectionOnClick
  disableColumnMenu
  rowHeight={48}
  columnHeaderHeight={48}
  pageSizeOptions={[5, 10, 25]}
  initialState={{
    pagination: {
      paginationModel: {
        pageSize: 10,
        page: 0,
      },
    },
  }}
  sx={{
    border: "none",
    fontSize: "13px",
    color: "#222",

    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#000",
    },

    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "#000",
      color: "#e3cd0d",
      fontSize: "13px",
      fontWeight: 700,
    },

    "& .MuiDataGrid-row": {
      cursor: "pointer",
      borderBottom: "1px solid #f1f1f1",
    },

    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#fff7ed",
    },

    "& .MuiDataGrid-cell": {
      fontSize: "12px",
      outline: "none !important",
    },

    "& .MuiDataGrid-footerContainer": {
      minHeight: 48,
      borderTop: "1px solid #eee",
    },

    "& .MuiTablePagination-root": {
      fontSize: "13px",
    },

    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
      fontSize: "13px",
    },

    "& .MuiDataGrid-columnSeparator": {
      color: "#333",
    },
  }}
/>
</div>
)}


<ApplicantDetailsPanel
  selectedApplicant={selectedApplicant}
  setSelectedApplicant={setSelectedApplicant}
/>
</div>
);
};

export default AdminWholesaleApplications;
