import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";
import ApolloClient from 'apollo-boost';
import { ApolloProvider  } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/qe2e1nphq6s6",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer MRLFQUQ_5VjdgVEPdUAJL1KQoslSj4z5DZsn54OqPbU`
  }
})

const initialState = {
  action: "", 
  name:"ß"
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
      case "UPDATE_NAME":
        return { name: action.name };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
  <Provider store={store}>
    <AppNavigator />
  </Provider>
  </ApolloProvider>
);

export default App;