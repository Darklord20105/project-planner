export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async calls here
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Dark",
        authorLastName: "Lord",
        authorId: 1456,
        timestamp: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
    // end call
  };
};
