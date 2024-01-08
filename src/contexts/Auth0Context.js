import { createContext, useEffect, useReducer } from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";
import { BACKEND_URL, auth0Config } from "../config";

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

let auth0Client = null;

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  if (action.type === INITIALIZE) {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }
  if (action.type === SIGN_IN) {
    const { user, token } = action.payload;
    return { ...state, isAuthenticated: true, user, token };
  }
  if (action.type === SIGN_OUT) {
    localStorage.removeItem("user-data");
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  return state;
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      // try {
      //   auth0Client = new Auth0Client({
      //     client_id: auth0Config.clientId || "",
      //     domain: auth0Config.domain || "",
      //     redirect_uri: window.location.origin,
      //   });
      //   await auth0Client.checkSession();
      //   const isAuthenticated = await auth0Client.isAuthenticated();
      //   if (isAuthenticated) {
      //     const user = await auth0Client.getUser();
      //     dispatch({
      //       type: INITIALIZE,
      //       payload: { isAuthenticated, user: user || null },
      //     });
      //   } else {
      //     dispatch({
      //       type: INITIALIZE,
      //       payload: { isAuthenticated, user: null },
      //     });
      //   }
      // } catch (err) {
      //   console.error(err);
      //   dispatch({
      //     type: INITIALIZE,
      //     payload: { isAuthenticated: false, user: null },
      //   });
      // }

      const userData = JSON.parse(localStorage.getItem("user-data"));

      if (userData) {
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: true,
            user: userData.user,
            token: userData.token,
          },
        });
      } else {
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
            token: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email, password) => {
    try {
      const response = await fetch(`${BACKEND_URL}users/login/`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.status === 201) {
        localStorage.setItem("user-data", JSON.stringify(data));
        dispatch({
          type: SIGN_IN,
          payload: { user: data.user || null, token: data.token || null },
        });
      }

      return { status: response.status, message: data };
    } catch (err) {
      // console.log(err);
      return { status: 400, message: err };
    }
  };

  const signOut = async () => {
    // try {
    //   const response = await fetch(`${BACKEND_URL}users/login/`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   const data = await response.json();

    //   if (response.status === 201) {
    //     localStorage.setItem("user-data", JSON.stringify(data));
    //     dispatch({
    //       type: SIGN_IN,
    //       payload: { user: data.user || null, token: data.token || null },
    //     });
    //   }

    //   return { status: response.status, message: data };
    // } catch (err) {
    // console.log(err);
    //   return { status: 400, message: err };
    // }

    dispatch({ type: SIGN_OUT });
  };

  const resetPassword = (email) => {};

  // console.log(state);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "auth0",
        user: {
          id: state?.user?.id,
          avatar: state?.user?.picture,
          email: state?.user?.email,
          displayName: state?.user?.name,
          role: "user",
        },
        signIn,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
