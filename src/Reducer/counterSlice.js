import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get slider
export const getSliders = createAsyncThunk("sliderList", async () => {
  try {
    const response = await axios.get(
      "http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/getSlider.php"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});


//get Product
export const getProducts = createAsyncThunk("productList", async () => {
  try {
    const response = await axios.get(
      "http://localhost/reactjs/adminpro-react/backend/API/ProductAPI/getProduct.php"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});



//get Organic Vegetable
export const getOrganicVegetable = createAsyncThunk("OrganicVegetable", async () => {
  try {
    const response = await axios.get(
      "http://localhost/reactjs/adminpro-react/backend/API/OrganicVegetable/getOrganicVegetable.php"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});


//get Organic Vegetable
export const getBanner = createAsyncThunk("Banner", async () => {
  try {
    const response = await axios.get(
      "http://localhost/reactjs/adminpro-react/backend/API/Banner/getBanner.php"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});



//main reducer function
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    test: 15852141,
    district: "",
    dd: {
      name: "",
    },
    sliders: [],
    products: [],
    organicVegetable: [],
    banner: [],
},
  reducers: {
    inc: (state, action) => {
      state.value += action.payload;
    },
    dec: (state, action) => {
      state.value -= 1;
    },
    setTest: (state, action) => {
      state.test = 1415;
    },
    setData: (state, action) => {
      localStorage.setItem("district", action.payload);
    },
    getData: (state, action) => {
      state.district = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(getSliders.fulfilled, (state, action) => {
      state.sliders = action.payload;
    });
    //get Products
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products=( action.payload)
    });
    //get Organic Vegetable
    builder.addCase(getOrganicVegetable.fulfilled, (state, action) => {
      state.organicVegetable=( action.payload)
    });
    //get Banner
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.banner=( action.payload)
    });
  },
});
export const { inc, dec, setTest, setData, getData, getSlider } =
  counterSlice.actions;
export default counterSlice.reducer;
