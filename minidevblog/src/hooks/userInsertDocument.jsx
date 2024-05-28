import { useState,useEffect,useReducer } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const InitialState = {
    loading: null,
    error: null
}

const insertDocumentReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                error: null
            }
        case "ISERT_DOC":
            return {
                loading: false,
                error: null
            }
        case "ERROR":
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}