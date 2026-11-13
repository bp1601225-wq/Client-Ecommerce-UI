import { create } from "zustand";
import type { UserType } from "../../GlobalTypes";
import API, { handleAxiosError } from "../configuration/API";
import { toast } from "sonner";

type WholeSaleStoreType = {
  WholeSales: UserType[];
  GetWholeSales: () => Promise<void>;
  CreateWholeSale: (data: UserType) => Promise<boolean>;
  UpdateWholeSale: (id: string) => Promise<void>;
  ApproveWholeSale: (data:any) => Promise<void>;

  DeleteWholeSale: (id: string) => Promise<void>;

  AccessWholeSaleAccount: (email:string) => Promise<boolean>

};

export const useWholeSaleStore = create<WholeSaleStoreType>((set) => ({

  WholeSales: [],

  GetWholeSales: async () => {
    try {
      const response = await API.get("/machluxe-wholesale");

      set({
        WholeSales: response.data.data,
      });

    } catch (error: any) {
      handleAxiosError(error);
    }
  },

CreateWholeSale: async (data: UserType): Promise<boolean> => {
  try {
    const response = await API.post("/machluxe-wholesale", data);

    set((state) => ({
      WholeSales: [
        ...state.WholeSales,
        response.data.data,
      ],
    }));

    toast.success(response.data.message);

    // console.log(response.data.data);

    return true;

  } catch (error: any) {
    handleAxiosError(error);
    return false;
  }
},
  UpdateWholeSale: async (id: string) => {
    try {
      const response = await API.put(`/machluxe-wholesale/${id}`);

      set((state) => ({
        WholeSales: state.WholeSales.map((applicant) =>
          applicant.id === id
            ? { ...applicant, ...response.data.data }
            : applicant
        ),
      }));

    } catch (error: any) {
      handleAxiosError(error);
    }
  },

ApproveWholeSale: async (data: any) => {
  try {
    const response = await API.post(
      "/machluxe-wholesale-approval",
      data
    );

    set((state) => ({
      WholeSales: state.WholeSales.filter(
        (applicant) =>
          applicant.id !== response.data.data.updatedApplicant.id
      ),
    }));

    // console.log(response.data)

    toast.success(response.data.data.notification.message);

  } catch (error) {
    handleAxiosError(error);
  }
},

  DeleteWholeSale: async (id: string) => {
    try {
      await API.delete(`/machluxe-wholesale/${id}`);

      set((state) => ({
        WholeSales: state.WholeSales.filter(
          (applicant) => applicant.id !== id
        ),
      }));

      toast.success("Wholesale applicant deleted successfully");

    } catch (error: any) {
      handleAxiosError(error);
    }
  },

 AccessWholeSaleAccount: async (email: string): Promise<boolean> => {
  try {
    const response = await API.post(
      "/machluxe-whole-sale-account-access",
      { email }
    );

// console.log(
//   response.data.data
// )

     return response.data.data;


    // return success;
  } catch (error) {
    handleAxiosError(error);
    return false;
  }
},

}));