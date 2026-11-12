import {create} from "zustand"
import type {  UserType } from "../../GlobalTypes"
import API, { handleAxiosError } from "../configuration/API"
import { toast } from "sonner"


type StaffType = {

Staff: UserType[],
GetStaff: () => Promise<void>
CreateStaff: (data: UserType) => Promise<void> 
UpdateStaff: (id:string) => Promise<void> 
DeleteStaff: () => Promise<void>

}

export const useStaffStore = create<StaffType>((set)=>({

    Staff: [],

    GetStaff: async () => {

        try {

            const response = await API.get("/machluxe-users")

set ({
    Staff:response.data.data
})
        } catch (error:any){
            handleAxiosError(error)
        }
    },


    CreateStaff: async (data: UserType) => {
        try {

            const response = await API.post("/machluxe-users", data)


            set ((state)=>({
                Staff: [
                    ...state.Staff, response.data.data
                ]
            }))


            toast.success(response.data.message)

// if (response.data.data)

        } catch (error:any){
            handleAxiosError(error)
        }
    },



    UpdateStaff:  async (id:string) => {
        
        try {
            const response = await API.put(`/users/:${id}`)
            
set ((state)=>(
    {
        Staff: state.Staff.map((staff)=>(
            staff.id === id ? {...staff, ...response.data} :staff
        ))
    }
))

        } catch (error:any){
            handleAxiosError(error)
        }
    },



    DeleteStaff: async () => {

    }







}))