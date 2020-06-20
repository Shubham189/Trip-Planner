import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaCalendarPlus} from 'react-icons/fa';
import {BsListUl} from 'react-icons/bs';

export const Nav = () => (
    <nav className="nav">
        <Link to="/">
            <FaHome />
        </Link>
        <Link to="/add">
            <FaCalendarPlus />
        </Link>
        <Link to="/list">
            <BsListUl />
        </Link>
    </nav>
)