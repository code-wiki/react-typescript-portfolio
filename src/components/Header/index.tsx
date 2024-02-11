import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="collapse navbar-collapse d-flex justify-content-center">
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                About me
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/bookhself">
                                Bookshelf
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
