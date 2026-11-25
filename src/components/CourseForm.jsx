function CourseForm() {
    return (
        <div>
            <h2>Course Form</h2>

            <form>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Example: John Doe" 
                        className="input" 
                        id="fullname"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="john@mail.com" 
                        className="input"
                        id="email" 
                    />
                </div>

                <div>
                    <label htmlFor="course">Course</label>
                    <select id="course">
                        <option value="">Select a course</option>
                        <option value="frontend development">Frontend Development</option>
                        <option value="backend development">Backend Development</option>
                        <option value="fullstack development">Fullstack Development</option>
                        <option value="database development">Database Development</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CourseForm;