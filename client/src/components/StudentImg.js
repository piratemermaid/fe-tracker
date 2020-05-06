import React from "react";

const StudentImg = (props) => {
    const { name, byleth_gender, house } = props;
    // TODO: just get gender, can get rid of byleth_gender

    let imgSrc = `/img/students/${name}.png`;
    if (name === "Byleth") {
        imgSrc = `/img/students/Byleth_${byleth_gender}.png`;
    }

    return (
        <img
            src={imgSrc}
            className={`roster-img ${house.replace(/\s+/g, "")}`}
            alt={name}
            title={name}
        />
    );
};

export default StudentImg;
