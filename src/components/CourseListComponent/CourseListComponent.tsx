import type {LightCourseType} from "../../models/models.ts";
import CourseComponent from "../CourseComponent/CourseComponent.tsx";

export const CourseListComponent = ({courses}: {courses: LightCourseType[]}) => {
    return (
        <ul className="bg-amber-200 border-amber-700 rounded-lg w-1/2 p-2.5">
            {courses.map((course, index) => (<CourseComponent key={index} title={course.title} monthDuration={course.monthDuration} />))}
        </ul>
    );
};