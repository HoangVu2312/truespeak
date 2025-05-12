import React from 'react';

const Course = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Courses</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="p-3 border rounded text-center">Kids English</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border rounded text-center">IELTS Preparation</div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border rounded text-center">Adult Conversation</div>
        </div>
      </div>
    </div>
  );
};

export default Course;