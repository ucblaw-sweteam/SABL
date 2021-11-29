import React from "react";
import CourseSelection from "./CourseSelection";
import Login from "./Login";
import ThankYou from "./ThankYou";
export default function App() {
  const [user, setUser] = React.useState(null);
  const [view, setView] = React.useState("survey");
  let mode;

  if (user == null) {
    mode = <Login setUser={setUser} />;
  } else {
    mode =
      view === "survey" ? (
        <CourseSelection user={user} setView={setView} />
      ) : (
        <ThankYou />
      );
  }
  return mode;
}
