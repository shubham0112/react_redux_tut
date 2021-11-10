import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {name:"",age:0,email:""}

// for every reducer you want to create, create a separate file in features with a slice object

export const userSlice = createSlice({
    name:"user",
    initialState:{value : initialStateValue},
    reducers:{
        // login is a function which when called will change the value of the state
        // this can be called from any component since we are exporting login function
        login: (state,action)=>{
            state.value = action.payload
        },
        logout: (state,action)=>{
            state.value = initialStateValue;
        },
    },
});

export const {login,logout} = userSlice.actions

export default userSlice.reducer;