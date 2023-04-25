import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInbox, faUser, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

function Header() {
    return (
        <div className="header">
            <div className="wrapper-header grid">
                <div className="wrapper-header__top">
                    <div className="wrapper-header__top__navigate col-6">
                        <div className="wrapper-header__top__navigate__facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="wrapper-header__top__navigate__address">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className="wrapper-header__top__navigate__inbox">
                            <FontAwesomeIcon icon={faInbox} />
                        </div>

                    </div>
                    <div className="wrapper-header__top__other col-6">
                        <div className="wrapper-header__top__other__login">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="wrapper-header__top__other__favourite">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="wrapper-header__top__other__cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;