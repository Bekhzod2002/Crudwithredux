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


        updateName: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.name = action.payload.name;
                }
            })
        },

        updateUsername: (state, action) => {
            state.value.map((user) => {
              if (user.id === action.payload.id) {
                user.username = action.payload.username;
              }
            });
        },

        updatePhone: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.phone = action.payload.phone;
                }
            })
        },

        updatelocation: (state, action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.country = action.payload.country;
                }
            })
        },

    },
});

export const {addUser, deleteUser, updateName, updateUsername, updatePhone, updatelocation } = userSlice.actions

export default userSlice.reducer;