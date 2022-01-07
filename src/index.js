import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const rootElement = document.getElementById("root");
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer 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"
  }
});



ReactDOM.render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, rootElement);
