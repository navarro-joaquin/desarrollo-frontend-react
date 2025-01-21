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
      state.formData = {
        module: '',
        username: '',
        email: '',
        password: '',
      }
    }
  },
});

export const { updateForm, resetFormData } = formSlice.actions;

export default formSlice.reducer;