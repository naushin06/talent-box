import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.title}
        </li>
      ))}
    </ul>
  );
}

export default CourseList;