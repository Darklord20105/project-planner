const initState = {
  projects: [
    // { id: 1, title: "title 1", content: "the first note content" },
    // { id: 2, title: "title 2", content: "the second note content" },
    // { id: 3, title: "title 3", content: "the third note content" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
