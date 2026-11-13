import { create } from "zustand";
import type { UserType } from "../../GlobalTypes";
import API, { handleAxiosError } from "../configuration/API";
import { toast } from "sonner";

type WholeSaleStoreType = {
  WholeSales: UserType[];
  GetWholeSales: () => Promise<void>;
  CreateWholeSale: (data: UserType) => Promise<void>;
  UpdateWholeSale: (id: string) => Promise<void>;
  DeleteWholeSale: (id: string) => Promise<void>;
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

  CreateWholeSale: async (data: UserType) => {
    try {
      const response = await API.post("/machluxe-wholesale", data);

      set((state) => ({
        WholeSales: [
          ...state.WholeSales,
          response.data.data,
        ],
      }));

      toast.success(response.data.message);

    } catch (error: any) {
      handleAxiosError(error);
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

}));