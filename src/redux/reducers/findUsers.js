import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";



export const findAllUsers = createAsyncThunk(
    'findUser/FindAllUsers',
    async (filter,{rejectWithValue}) => {
        try{
            const res = await axios(`/users?not=${filter.login}&search=${filter.search}`)

            if (res.statusText !== 'OK'){
                throw new Error('Error')
            }
            return res.data

        }
        catch (err) {
            return rejectWithValue(err.message)
        }

    }

)

const findUserSlice = createSlice({
    name : 'findUser',
    initialState : {
        data : [],
        status : '',
        error : '',
        filter : {
            search : ''
        }

    },
    reducers : {
        changeSearch : (state, action) => {
        state.filter = {
            ...state.filter,
            search : action.payload
        }

        }

    },
    extraReducers: {
        [findAllUsers.pending] : (state, action) => {
            state.status = 'loading';
            state.error = ''
        },
        [findAllUsers.rejected] : (state, action) => {
            state.status = 'Error';
            state.error = action.payload
        },[findAllUsers.fulfilled] : (state, action) => {
            state.status = 'Done';
            state.data = action.payload
        }



    }



})


export const { changeSearch } = findUserSlice.actions
export default findUserSlice.reducer