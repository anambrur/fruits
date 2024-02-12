
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSliders = createAsyncThunk(
    "sliderList",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/getSlider.php"
            );
            return response.data.data;
        } catch (error) {
            console.error(error);
        }
    });

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        test: 15852141,
        district: '',
        dd: {
            name: ''
        },
        sliders: []
    },
    reducers: {
        inc: (state, action) => {
            state.value += action.payload
        },
        dec: (state, action) => {
            state.value -= 1
        },
        setTest: (state, action) => {
            state.test = 1415
        },
        setData: (state, action) => {
            localStorage.setItem('district', action.payload)
        },
        getData: (state, action) => {
            state.district = action.payload
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSliders.pending, (state, action) => {
                
            })
            .addCase(getSliders.fulfilled, (state, action) => {
               state.sliders=action.payload
            //    console.log(action.payload)
            })
            .addCase(getSliders.rejected, (state, action) => {

            })
    }
})
export const { inc, dec, setTest, setData, getData, getSlider } = counterSlice.actions
export default counterSlice.reducer
