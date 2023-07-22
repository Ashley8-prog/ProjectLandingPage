import React from "react";


const Jumbotron = (props) => {
    return (
        <div className="jumbotron m-5">
            <h1 className="display-4">A Warm Welcome</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aspernatur aliquid necessitatibus, optio, voluptatum quam iusto exercitationem rerum, nostrum id suscipit quidem explicabo magni ipsum officia praesentium est quasi quis.</p>
            <a className="btn btn-primary btn-lg mb-5 " href="https://reactjs.org/" role="button">
                Call to action!
            </a>
        </div>
    );
};


export default Jumbotron