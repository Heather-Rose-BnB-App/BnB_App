import React from "react";

import './styles.css';



//galary page component
export class Gallery extends React.Component {
    state = {
        selectedImage: null
    }

    handleImageClick = (imageSrc) => {
        this.setState({ selectedImage: imageSrc });
    }

    render() {
        const imageList = [];
        for (let i = 1; i <= 24; i++) {
            imageList.push(`/images/image${i}.jpg`);
        }

        return (
            <div className="gallery-container">
                <h2>Photo Gallery</h2>
                <div className="image-container">
                    {imageList.map((imageSrc, index) => (
                        <img
                            key={index}
                            src={imageSrc}
                            alt={`Image ${index + 1}`}
                            onClick={() => this.handleImageClick(imageSrc)}
                            className={this.state.selectedImage === imageSrc ? 'selected' : ''}
                        />
                    ))}
                </div>
                {this.state.selectedImage && (
                    <div className="overlay" onClick={() => this.setState({ selectedImage: null })}>
                        <img src={this.state.selectedImage} alt="Selected" />
                    </div>
                )}
            </div>
        );
    }
}
