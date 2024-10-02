import React from 'react';

const Courses = () => {
  const courseList = ['Computer Science', 'Information Technology', 'Artificial Intelligence and Data Science', 'Automation and Robotics'];

  return (
    <div className="courses">
      <h2>Courses Offered</h2>
      <ul>
        {courseList.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
