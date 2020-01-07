import React from "react";
import "./styles.css";

// import firebase from "./firebase";
import TimesList from "./components/times-list";
import AddTimeEntryForm from "./components/Add-Time-Entry-Form";
// firebase
//   .firestore()
//   .collection("times")
//   .add({
//     title: "Test title",
//     time_seconds: 45
//   });

export default function App() {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <TimesList />
      <AddTimeEntryForm />
    </div>
  );
}
