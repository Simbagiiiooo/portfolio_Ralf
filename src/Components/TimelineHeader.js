import React from 'react';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";

const TimelineHeader = () => {
    return (
        <div className = "projecten">
            <h1>Projecten:</h1>
            <ul>
                <li key = "1">
                    <IoMdSchool
                    style={{
                        backgroundColor: "#4f8bc9"
                    }}/>
                    <span>Project voor de opleiding</span>
                </li>
                <li key = "2">
                    <BsFillBriefcaseFill
                        style={{
                            backgroundColor: "#ff8400",
                        }}/>
                    <span>Project voor mezelf</span>
                </li>
                
            </ul>
            <em>Click op een foto voor meer informatie</em>
        </div>
    )
}

export default TimelineHeader
