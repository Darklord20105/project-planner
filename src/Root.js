import React from "react";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import App from "./App";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/fbConfig";
import { createFirestoreInstance } from "redux-firestore";

const rrfConfig = { userProfile: "users" };

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const Root = () => (
  <ReactReduxFirebaseProvider {...rrfProps}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactReduxFirebaseProvider>
);

export default Root;
