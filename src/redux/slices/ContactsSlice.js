import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://64c4fe7dc853c26efada5cea.mockapi.io';

export const addContactToBackend = createAsyncThunk(
  'contacts/addContactToBackend',
  async newContact => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        throw new Error('Failed to add contact to the backend.');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error while adding contact to the backend.');
    }
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },

  reducers: {
    // Usuwamy kod związany z addContact
    getFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
    },
  },
  // Dodajemy obsługę naszej asynchronicznej akcji thunk addContactToBackend
  extraReducers: builder => {
    builder.addCase(addContactToBackend.fulfilled, (state, action) => {
      state.contacts.unshift(action.payload);
    });
  },
});

export const { deleteContact, getFilter } = contactSlice.actions;
export default contactSlice.reducer;
