import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/slice";
import { userReduser } from "./userSlice";
import { authReducer } from "./auth/slice";




export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		user: userReduser,
		auth: authReducer,
	},
})



