import React from 'react';
import { Link } from 'react-router-dom';
import { PiGitlabLogoSimpleBold } from 'react-icons/pi';
import { TbBrandBlogger } from 'react-icons/tb';
import { FaSwatchbook } from 'react-icons/fa';
import { PiBookmarksLight } from 'react-icons/pi';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { PiNotebookBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';

export default function index() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container d-flex flex-column align-items-start">
                <div className="tw-px-[0.5rem] mx-2 d-flex  align-items-center name-container">
                    <FaGithub size={30} className="github-icon" /> &nbsp;
                    <h4 className="tw-ml-4 tw-text-sm">
                        {'Aditya Gautam > Portfolio'}
                    </h4>
                </div>
                <div className="">
                    <div className="collapse navbar-collapse d-flex justify-content-start gap-2">
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active d-flex justify-content-center align-items-center tw-text-sm"
                                    to="/"
                                >
                                    <PiGitlabLogoSimpleBold />
                                    &nbsp;
                                    <h4 className="tw-mb-[-4%]">About me</h4>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex justify-content-center align-items-center tw-text-sm"
                                    to="/blog"
                                >
                                    <TbBrandBlogger className=" tw-mb-[-2%]" />
                                    &nbsp;
                                    <h4 className="tw-mb-[-6%]">Blog</h4>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex justify-content-center align-items-center tw-text-sm"
                                    to="/bookhself"
                                >
                                    <PiNotebookBold />
                                    &nbsp;
                                    <h4 className="tw-mb-[-2%]">Bookshelf</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
