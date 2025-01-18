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
    resetFormData: (state) => {
      state.formData = initialState.formData;
    }
  },
});

export const { updateForm, resetFormData } = formSlice.actions;

export default formSlice.reducer;