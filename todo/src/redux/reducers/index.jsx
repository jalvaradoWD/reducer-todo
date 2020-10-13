const initialState = [{}];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
  }
};
