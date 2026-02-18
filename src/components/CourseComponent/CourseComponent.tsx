import type {LightCourseType} from "../../models/models.ts";

function CourseComponent(course: LightCourseType) {
    return (
        <li className="text-amber-950 text-left text-2xl hover:text-amber-700 cursor-pointer">{course.title} - {course.monthDuration} months</li>
    );
}

export default CourseComponent;