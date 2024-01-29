import React from "react";
import { createStore } from "redux";
import updateQuoteReducer from "./reducer";

const store = createStore(updateQuoteReducer)

export default store