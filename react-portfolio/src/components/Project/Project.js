import React from "react";

const Project = function ({ id, title, group, github, deployed, screenshot, description, tech }) {
    const cardId = "project" + id.toString();
    const target = "#" + cardId;
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                <button className="btn btn-info" type="button" data-toggle="collapse" data-target={target} aria-expanded="false" aria-controls="collapseExample">
                    See project details
                </button>
            </p>
            <div className="card collapse mb-3" id={cardId}>
                <img src={screenshot} className="card-img-top" alt="screenshot" />
                <div className="card-body">
                    <p className="card-text">{group ? "Group" : "Individual"} project</p>
                    <p className="card-text">GitHub: <a href={github} alt="GitHub url">{github}</a></p>
                    <p className="card-text">Deployed app: <a href={deployed} alt="deployed url">{deployed}</a></p>
                    <p className="card-text">Technologies used: {tech}</p>
                </div>
            </div>
        </>
    )
}

export default Project;