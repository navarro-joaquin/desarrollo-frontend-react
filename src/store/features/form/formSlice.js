import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    module: 'React Mod7',
    username: '',
    email: '',
    password: 'mod7USIP-ALVARO',
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData = {...action.payload};
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    }
  },
});

export const { updateForm, resetForm } = formSlice.actions;

export default formSlice.reducer;