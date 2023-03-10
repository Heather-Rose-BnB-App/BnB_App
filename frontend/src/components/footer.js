import React from "react";
import * as Icon from 'react-bootstrap-icons';

export class Footer extends React.Component{
    render(){
        return (
            <footer className="bg-dark text-center text-white mt-auto">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <Icon.Facebook/>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <Icon.Instagram/>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <Icon.Snapchat/>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <Icon.Book/>
                    </a>
                </section>
                
                <section className="mb-4">
                    <p>
                        Welcome to Caheroyan House and Farm B&B
                    </p>
                </section>
                <section className="">
                    <div className="footerRow align-items-start">
                        <div className="col">
                            <h5 className="text-uppercase">Links</h5>   
                            <ul className="list-unstyled">
                                 <li>
                                    <a href="/" className="text-white">Home</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/rooms" className="text-white">Rooms</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                 <li>
                                    <a href="/about" className="text-white">About</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                 <div className="text-center p-3">
                         ?? 2023 Copyright: Heather & Rose
                 </div>
            </footer>
        )
    }
}
export default Footer;