import React from "react";
import "./style.css";

const Contact = function () {
    return (
        <div className="row content-body">
            <div className="col-12">

                <p>My email address is <a href="mailto:max.semegen@gmail.com">max.semegen@gmail.com</a></p>

                <p>My GitHub can be found at <a href="https://github.com/Maxsem4">https://github.com/Maxsem4</a></p>

                <p>My LinkedIn can be found at <a href="https://linkedin.com/in/maxime-semegen-b38521b2/">https://linkedin.com/in/maxime-semegen-b38521b2/</a></p>

                <p>Click <a href="https://docs.google.com/document/d/1AJ8PoOmNHGtN8bZNaIpiiwbleomicYEGt7XZ-B6VfKg/edit?usp=sharing">here</a> to view my resume</p>

            </div>
        </div>
    );
}

export default Contact;