import React from "react";

const Cards = () => {
    return (
        <div className="card container align-items cards border border-light" style={{ width: "18rem" }}>
            <img src="https://4events.at/wp-content/uploads/2015/04/500x500.gif" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla aliquid repudiandae veniam deserunt quisquam totam, quibusdam iste ipsam nihil asperiores sint nam omnis, officiis ad! Doloribus consectetur animi ratione!</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Cards