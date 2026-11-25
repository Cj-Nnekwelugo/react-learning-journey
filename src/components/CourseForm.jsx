import { useState } from "react";

function CourseForm() {
const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: ""
});

  return (
    <div className="flex flex-col gap-8 py-10 w-full max-w-md">
      <h2 className="font-bold text-4xl">Course Form</h2>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="Example: John Doe"
            className="input"
            id="fullname"
            value={formData.fullName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="john@mail.com"
            className="input"
            id="email"
            value={formData.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="course">Course</label>
          <select id="course" className="input" value={formData.course}>
            <option value="">Select a course</option>
            <option value="frontend development">Frontend Development</option>
            <option value="backend development">Backend Development</option>
            <option value="fullstack development">Fullstack Development</option>
            <option value="database development">Database Development</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
