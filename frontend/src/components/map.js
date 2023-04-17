import React from "react";
import './styles.css';

export class Map extends React.Component {


    render() {
        return (
            <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.10491046327!2d-8.74123398493207!3d53.30556738546709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b890d9f39e319%3A0x8abf9c2fbe578dff!2sCaheroyan%20House%2C%20Caherroyn%2C%20Athenry%2C%20Co.%20Galway!5e0!3m2!1sen!2sie!4v1678365108820!5m2!1sen!2sie" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>




        );
    }
}