import Courses from "./SampleCourses"

const StudentDashboard = () => {
  // Simulate enrolled courses (replace with actual logic)
  const enrolledCourseIds = [1, 2]; // Replace with student-specific logic

  const enrolledCourses = Courses.filter((course) => enrolledCourseIds.includes(course.id));

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.instructor}
            {/* Add progress bar and mark complete functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
