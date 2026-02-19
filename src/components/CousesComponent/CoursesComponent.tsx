import type {MiddleCourseType} from "../../models/models.ts";
import {CourseComponent} from "../CourseComponent/CourseComponent.tsx";
import {ModulesComponent} from "../ModulesComponent/ModulesComponent.tsx";
import * as React from "react";

type CoursesComponentProps = {
    courses: MiddleCourseType[];
}
export const CoursesComponent: React.FC<CoursesComponentProps> = ({courses}) => {
    return (
        <div className="flex flex-wrap justify-around">{courses.map((item, index) => (
            <CourseComponent key={index} course={item}>{<ModulesComponent
                modules={item.modules}/>}</CourseComponent>))}
        </div>
    );
};