import { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { RefreshCw, Users, LoaderCircle } from "lucide-react";
import { useStaffStore } from "../../components/ZustandShare/StaffZuts";

const AdminUsersList = () => {
  const { Staff, GetStaff, } = useStaffStore();
  const [loading, setloading] = useState(false)



async function LoadAllUsers(){

try {
setloading(true)
await GetStaff()
} catch (error){
    // store handles error
} finally{
setloading(false)

}

}
  useEffect(() => {
LoadAllUsers()
}, []);

  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      minWidth: 140,
    },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      minWidth: 120,
    },
    {
      field: "businessName",
      headerName: "Business Name",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "businessType",
      headerName: "Business Type",
      minWidth: 130,
    },
    {
      field: "businessDescription",
      headerName: "Description",
      flex: 1,
      minWidth: 160,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 100,
    },
    {
      field: "createdAt",
      headerName: "Date Registered",
      minWidth: 140,
      renderCell: (params) =>
        params.value
          ? new Date(params.value).toLocaleDateString()
          : "—",
    },
  ];

  return (
    <div className="space-y-2 text-[10px] text-black">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold">User Management</h2>
          <p className="text-[9px] text-gray-500">
            View registered users
          </p>
        </div>

        <button
          onClick={GetStaff}
          disabled={loading}
          className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 text-[9px] transition hover:border-[#fd7e02] hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RefreshCw
            size={11}
            className={loading ? "animate-spin text-[#fd7e02]" : ""}
          />
          Refresh
        </button>
      </div>

      {/* Total Users */}
      <div className="flex items-center gap-2 rounded border border-gray-100 bg-white p-2">
        <Users size={16} className="text-[#fd7e02]" />
        <div>
          <p className="text-[9px] text-gray-500">Total Users</p>
          <p className="text-xs font-semibold">{Staff.length}</p>
        </div>
      </div>

      {/* Black and Amber Loader */}
      {loading && (
        <div className="flex flex-col items-center justify-center gap-3 rounded border border-gray-100 bg-white py-12">
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute h-9 w-9 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#fd7e02]" />
            <LoaderCircle size={17} className="text-black" />
          </div>

          <div className="text-center">
            <p className="text-[10px] font-semibold text-black">
              Loading users
            </p>
            <p className="text-[9px] text-gray-400">
              Please wait...
            </p>
          </div>
        </div>
      )}

      {/* No Data */}
      {!loading && Staff.length === 0 && (
        <div className="flex flex-col items-center gap-1 rounded border border-gray-100 bg-white py-10 text-gray-400">
          <Users size={22} className="text-[#fd7e02]" />
          <p className="text-[10px] font-semibold text-black">
            No users found
          </p>
        </div>
      )}

      {/* Table */}
      {!loading && Staff.length > 0 && (
        <div className="overflow-hidden rounded border border-gray-200 bg-white">
          <DataGrid
            rows={Staff}
            columns={columns}
            getRowId={(row) => row.email}
            disableRowSelectionOnClick
            disableColumnMenu
            rowHeight={38}
            columnHeaderHeight={38}
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
              fontSize: "10px",
              color: "#222",

              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#000",
              },

              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "9px",
                fontWeight: 700,
              },

              "& .MuiDataGrid-row": {
                borderBottom: "1px solid #f1f1f1",
              },

              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#fff7ed",
              },

              "& .MuiDataGrid-cell": {
                fontSize: "10px",
                outline: "none !important",
              },

              "& .MuiDataGrid-footerContainer": {
                minHeight: 38,
                borderTop: "1px solid #eee",
              },

              "& .MuiTablePagination-root": {
                fontSize: "9px",
              },

              "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
                fontSize: "9px",
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AdminUsersList;