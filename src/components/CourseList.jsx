import  { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseList({ courses }) {
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const handleToggleDetails = (courseId) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-3 " key={course.id}>
            <div className="card" style={{ width: "18rem" }}>
            <img src={course.img} className="img-fluid" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                {expandedCourseId === course.id ? (
                  <div>
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Schedule:</strong> {course.schedule}</p>
                    {/* Add more details as needed */}
                    <button className="btn btn-primary" onClick={() => handleToggleDetails(course.id)}>
                      Less
                    </button>
                  </div>
                ) : (
                  <Link to={`/course/${course.id}`} className="btn btn-primary">
                    More
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
