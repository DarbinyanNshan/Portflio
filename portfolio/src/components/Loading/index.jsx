import React from "react";
import './style.css';

import Logo from '../../assets/images/FinalLogo.jpg';

export default function LoadingPage() {
    return(
    <div className="loading">
        <img src={Logo} alt="Logo" className="mainLogo"/>
    </div>);
};