// import React from "react";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./redux/configureStore";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import firebase from "./config/fbConfig";
// import { createFirestoreInstance } from "redux-firestore";

// const rrfConfig = {
//   attachAuthIsReady: true,
//   useFirestoreForProfile: true,
//   userProfile: "users"
// };
// // other options (parameters) in react-redux-firebase are placed here instead of passing it in the store directly
// export const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };

// const Root = () => (
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>
// );

// export default Root;
