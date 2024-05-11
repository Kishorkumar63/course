import { useEffect, useState } from "react";
// import  Data  from "./data.json";

export const ListData = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.js")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(courses);
  return <div></div>;
};
