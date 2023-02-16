import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../data";

export const userSlice = createSlice ({
    name: 'users',
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },

        editusername: (state, action) =>{
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username;
                }
            })
        }
    },
});

export const {addUser, deleteUser, editusername} = userSlice.actions

export default userSlice.reducer;