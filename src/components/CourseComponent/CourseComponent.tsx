import {type ReactNode} from "react";
import type {MiddleCourseType} from "../../models/models.ts";
import * as React from "react";

type CourseComponentProps = {
    children: ReactNode;
    course: MiddleCourseType;
}
export const CourseComponent: React.FC<CourseComponentProps> = ({course, children}) => {
    return (
        <div
            className="text-left mb-5 border rounded-lg border-emerald-950 p-3 transition delay-150 duration-300 ease-in-out hover:scale-105 hover:text-shadow-lg/20 cursor-pointer">
            <h3 className="font-bold text-4xl text-emerald-950">{course.title}</h3>
            <h4 className="font-medium font-mono text-emerald-800 text-3xl">Duration: {course.monthDuration} month, {course.hourDuration} hours</h4>
            <p className="text-2xl text-emerald-950 underline">Modules: </p>
            {children}
        </div>
    );
};