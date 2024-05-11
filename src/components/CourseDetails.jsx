// CourseDetails.js
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import courses from "./SampleCourses";

const CourseDetails = () => {
  const { id } = useParams(); // Get course ID from URL parameter
  const [course, setCourse] = useState([{}]);

  
  useEffect(() => {
    const selectedCourse = courses.filter((c) => c.id === parseInt(id));
    setCourse(selectedCourse);
  }, [id]);
  console.log(course)

  if (!course) return <div>Loading...</div>;

  return (
    <Fragment>
      {course.map((res) => (
        <>
          <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              <div>
                <img
                  className="d-block w-100 mt-5 img-thumbnail"
                  src={res.img}
                  alt={res.img}
                  height="400"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 ms-5 mt-3">

          <h3>{res.name}</h3>
          <h4>Duration : {res.duration}</h4>
          <p id="product_id">Course # {res.id}</p>
          <hr />



          </div>
          <div className="col-12 col-lg-5 ms-5 mt-3">

         
          <p id="product_id"> {res.description}</p>
          <hr />



          </div>


          {/* Weeks */}
          <div className="container">
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     {res.instructor}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>


        </>
      ))}
    </Fragment>
  );
};

export default CourseDetails;
