
import { useState } from "react";
import { UserPlus, Users } from "lucide-react";
import { inputStyle, labelStyle } from "../../utils/utils";
import { Button } from "@mui/material";
import { useStaffStore } from "../../components/ZustandShare/StaffZuts";
import { useForm } from "react-hook-form";
import type { UserType } from "../../GlobalTypes";
import AdminUsersList from "./AdminUserList";

function CreateUser() {

const [activeView, setActiveView] = useState<"create" | "list">("create");
const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<UserType>()

const {CreateStaff} = useStaffStore()



const SaveUser = async (data:UserType) => {

try {
await CreateStaff(data)
// console.log(`logged detail`, data)

} catch (error){

}
    
}

  return (
    <div className="w-full max-w-4xl overflow-hidden rounded-lg  p-2">
<div className="mb-2 flex items-center gap-3 border-b border-gray-100">
  <button
    type="button"
    onClick={() => setActiveView("create")}
    className={`flex items-center gap-1 !px-1 !py-1 !text-[8px] !font-medium ${
      activeView === "create"
        ? "border-b-2 border-[#fd7e02] !text-[#fd7e02]"
        : "border-b-2 border-transparent !text-gray-400"
    }`}
  >
    <UserPlus size={9} />
    Create User
  </button>

  <button
    type="button"
    onClick={() => setActiveView("list")}
    className={`flex items-center gap-1 !px-1 !py-1 !text-[10px] !font-medium ${
      activeView === "list"
        ? "border-b-2 border-[#fd7e02] !text-[#fd7e02]"
        : "border-b-2 border-transparent !text-gray-400"
    }`}
  >
    <Users size={9} />
    Get Users
  </button>
</div>

      {activeView === "create" ? (
      <>
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
        <div className="rounded-md bg-[#fd7e02]/10 p-2 text-[#fd7e02]">
          <UserPlus size={17} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-black">Create User</h2>
          <p className="text-xs text-gray-500">Add a new user account</p>
        </div>
      </div>

      {/* Form */}
<form className="space-y-2 p-2" onSubmit={handleSubmit(SaveUser)}>

  <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">

    <div>
      <label className={labelStyle}>Full Name *</label>
      <input
        {...register("fullName", { required: "Full name is required" })}
        className={inputStyle}
        placeholder="Enter full name"
      />
      {errors.fullName && (
        <p className="text-[12px] text-red-500 mt-0.5">{errors.fullName.message}</p>
      )}
    </div>

    <div>
      <label className={labelStyle}>Email Address *</label>
      <input
        {...register("email", {
          required: "Email address is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email address",
          },
        })}
        type="email"
        className={inputStyle}
        placeholder="Enter email address"
      />
      {errors.email && (
        <p className="text-[12px] text-red-500 mt-0.5">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label className={labelStyle}>Phone Number *</label>
      <input
        {...register("phoneNumber", { required: "Phone number is required" })}
        className={inputStyle}
        placeholder="Enter phone number"
      />
      {errors.phoneNumber && (
        <p className="text-[12px] text-red-500 mt-0.5">{errors.phoneNumber.message}</p>
      )}
    </div>

    <div>
      <label className={labelStyle}>Role *</label>
   <select
  {...register("role", { required: "Please select a role" })}
  className={`${inputStyle} !text-[12px]`}
  defaultValue=""
>
  <option value="" disabled>Select role</option>
  <option value="SUPER_ADMIN">Super Admin</option>
  <option value="ADMIN">Admin</option>
  <option value="STAFF">Staff</option>
  <option value="WHOLESALE">Wholesale</option>
</select>
      {errors.role && (
        <p className="text-[12px] text-red-500 mt-0.5">{errors.role.message}</p>
      )}
    </div>

    <div>
      <label className={labelStyle}>Account Status *</label>
     <select
  {...register("accountStatus", {
    required: "Please select an account status",
  })}
  className={`${inputStyle} !text-[12px]`}
  defaultValue="PENDING"
>
        <option value="PENDING">Pending</option>
        <option value="APPROVED">Approved</option>
        <option value="REJECTED">Rejected</option>
        <option value="SUSPENDED">Suspended</option>
      </select>
      {errors.accountStatus && (
        <p className="text-[12px] text-red-500 mt-0.5">{errors.accountStatus.message}</p>
      )}
    </div>

    <div>
      <label className={labelStyle}>Password *</label>
      <input
        {...register("passwordHash", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        // type="password"
        className={inputStyle}
        placeholder="Enter password"
      />
      {errors.passwordHash && (
        <p className="text-[12px] text-red-500 mt-0.5">{errors.passwordHash.message}</p>
      )}
    </div>

  </div>

  <div className="flex justify-end border-t border-gray-100 pt-2">
  <Button
  type="submit"
  variant="outlined"
  size="small"
  startIcon={<UserPlus size={11} />}
  sx={{
    border: "1px solid black",
    color: "black",
    textTransform: "none",
    fontSize: "10px",
    fontWeight: 500,
    borderRadius: "4px",
    px: 1,
    py: 0.35,
    minWidth: "auto",
    minHeight: "30px",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid black",
      backgroundColor: "transparent",
      color: "black",
      boxShadow: "none",
    },
  }}
>
  {isSubmitting ? "Creating..." : "Create User"}
</Button>
  </div>
 
</form>
      </>
      ) : (
        <AdminUsersList />
      )}
    </div>
  );
}

export default CreateUser;
