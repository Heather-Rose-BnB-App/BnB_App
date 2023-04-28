import React from "react";
import './styles.css';


// rending component for the about page
export class About extends React.Component {


    render() {
        return (
            <div className="about-container">
                <div className="about-header">
                    <h1>About Us</h1>
                </div>
                <img className="about-image" src="/images/image2.jpg" alt="Caheroyan House and Farm B&B" />
                <div className="about-text">
                <p>
                    Caheroyan House and Farm B&B is a family-owned and operated bed and breakfast located in the heart of the Irish countryside. The property has a rich history, dating back to the 18th century when it was originally built as a working farmstead.
                </p>
                <p>
                    Today, Caheroyan House and Farm B&B offers comfortable and spacious
                    accommodations with modern amenities, including free Wi-Fi, ensuite bathrooms,
                    and a full Irish breakfast each morning. The B&B also offers guests the opportunity
                    to experience farm life firsthand, with tours of the farm and feeding the animals.
                </p>
                <p>
                    The B&B is located just a short drive from the bustling city of Galway, known for its vibrant arts and music scene, as well as the breathtaking Cliffs of Moher and other stunning natural attractions. Whether you're looking to explore the local area or simply relax and enjoy the peaceful surroundings, Caheroyan House and Farm B&B is the perfect destination.
                </p>
            </div>
            </div>
        );
    }
}