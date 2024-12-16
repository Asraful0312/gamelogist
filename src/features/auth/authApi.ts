// authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    signup: builder.mutation({
      async queryFn({ email, password, username }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          await updateProfile(user, { displayName: username });

          // Store user data in Firestore
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            username: username,
          });

          return { data: user };
        } catch (error) {
          console.log(error);

          // Assert the error type to access the message property
          if (error instanceof Error) {
            return {
              error: { status: "CUSTOM_ERROR", error: error.message },
            };
          } else {
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: "An unknown error occurred",
              },
            };
          }
        }
      },
    }),
  }),
});

export const { useSignupMutation } = authApi;
