import  React from 'react';

import {Link} from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';


function PageHeader(){
    return (
        <header className="page-header"> 
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt=""/>
                </Link>
                <img src={logoImg} alt="Logo"/>
            </div>

            <div className="header-content">
                <strong> Estes são os Proffys disponiveis </strong>
            </div>
        </header>
    )
}


export default PageHeader;