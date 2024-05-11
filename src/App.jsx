import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import CourseList from "./components/CourseList";
import Caoursel from "./components/Caoursel";
import CourseDetails from "./components/CourseDetails"
import courses from "./components/SampleCourses"

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
<Caoursel/>
        <Routes>
          <Route element={<CourseList  courses={courses} />} path="/" />
          <Route element={<CourseDetails/>} path="/course/:id" />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
