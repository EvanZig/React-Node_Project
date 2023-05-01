import { useContext, useRef, useState } from "react";
import {
  CImage,
  CForm,
  CButton,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CCollapse,
  CNavbarToggler,
  CContainer,
  CDropdown,
  CNavbarNav,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdownDivider,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { cifCh, cifGb } from "@coreui/icons-pro";
import CIcon from "@coreui/icons-react";
import CartIcon from "../images/svgs/cart4.svg";
import HeartIcon from "../images/svgs/heart.svg";
import PersonIcon from "../images/svgs/person.svg";
import SearchBlack from "../images/svgs/search-black.svg";
import { TopBarContext } from "../contexts/TopBarContext";
import "../Styles/TopBarStyles.css";
import { GlobalVariablesContext } from "../contexts/GlobalVariablesContext";

export default function TopBar() {
  const topBarContext = useContext(TopBarContext);
  const globalVariablesContext = useContext(GlobalVariablesContext);
  const [visible, setVisible] = useState(true);
  const [favoritesVisibility, setFavoritesVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [profileVisibility, setprofileVisibility] = useState(false);

  let favoritesMenu = useRef();
  let cartMenu = useRef();
  let profileMenu = useRef();

  const toggleFavorites = () => {
    setFavoritesVisibility(!favoritesVisibility);
  };

  const toggleCart = () => {
    setCartVisibility(!cartVisibility);
  };
  topBarContext.useOutsideClick(
    favoritesMenu,
    setFavoritesVisibility,
    favoritesMenu
  );

  topBarContext.useOutsideClick(cartMenu, setCartVisibility, cartVisibility);
  topBarContext.useOutsideClick(
    profileMenu,
    setprofileVisibility,
    profileVisibility
  );

  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="dark"
        className="navbar bg-black text-white"
      >
        <CContainer fluid className="navbar">
          <CNavbarBrand href="#" className="navbar-logo">
            <span style={{ color: "white" }}>Some Company Logo</span>
          </CNavbarBrand>
          <CNavbarToggler
            onClick={() => setVisible(!visible)}
            className="navbar-toggler"
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CForm className="d-flex">
                <CFormInput
                  type="search"
                  className="me-1 search-prefix"
                  placeholder="Search by name,index,etc"
                />

                <CFormInput
                  type="search"
                  className="me-1 filter-prefix"
                  placeholder="All"
                  style={{ maxWidth: "150px" }}
                />
                <CFormInput
                  type="search"
                  className="me-1 country-prefix"
                  placeholder="Country"
                />
                <CButton
                  type="submit"
                  variant="ghost"
                  style={{ backgroundColor: "rgba(255,220,0,250)" }}
                >
                  <CImage src={SearchBlack} />
                </CButton>
              </CForm>
            </CNavbarNav>
          </CCollapse>
          <CNavbarNav className="navbar-userMenus">
            <CDropdown
              popper={false}
              alignment="end"
              visible={favoritesVisibility}
              ref={favoritesMenu}
            >
              <CButton
                variant="ghost"
                className="menu-button focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
                onClick={toggleFavorites}
              >
                <CImage src={HeartIcon} />
              </CButton>
              <div
                className={`outside-menu ${
                  visible ? "" : "toggled-off-searches-favorites"
                }`}
              >
                <CDropdownMenu className="dropdown-menu">
                  <CDropdownItem
                    href="#"
                    className="hover-yellow focus-yellow"
                    onClick={() => {
                      globalVariablesContext.setLoginModalVisibility(true);
                      toggleFavorites();
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Log in
                    </span>{" "}
                    to see your favorites
                  </CDropdownItem>
                  <CDropdownDivider className="dropdown-divider" />
                  <div className="newToCompany">New to this company?</div>
                  <CDropdownItem href="#" className="hover-none button-parent">
                    <CButton
                      color="dark"
                      variant="outline"
                      className="start-here-button"
                      onClick={() => {
                        globalVariablesContext.setRegisterModalVisibility(true);
                        toggleFavorites();
                      }}
                    >
                      {" "}
                      Start here
                    </CButton>
                  </CDropdownItem>
                </CDropdownMenu>
              </div>
            </CDropdown>
            <CDropdown
              popper={false}
              alignment="end"
              ref={cartMenu}
              visible={cartVisibility}
            >
              <CButton
                variant="ghost"
                className="menu-button focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
                onClick={toggleCart}
              >
                <CImage src={CartIcon} />
              </CButton>
              <div
                className={`outside-menu ${
                  visible ? "" : "toggled-off-searches-cart"
                }`}
              >
                <CDropdownMenu className="dropdown-menu">
                  <CDropdownItem
                    href="#"
                    className="hover-yellow focus-yellow"
                    onClick={() => {
                      globalVariablesContext.setLoginModalVisibility(true);
                      toggleCart();
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Log in
                    </span>{" "}
                    to see your Cart
                  </CDropdownItem>
                  <CDropdownDivider className="dropdown-divider" />
                  <div className="newToCompany">New to this company?</div>
                  <CDropdownItem href="#" className="hover-none button-parent">
                    <CButton
                      color="dark"
                      variant="outline"
                      className="start-here-button"
                      onClick={() => {
                        globalVariablesContext.setRegisterModalVisibility(true);
                        toggleCart();
                      }}
                    >
                      Start here
                    </CButton>
                  </CDropdownItem>
                </CDropdownMenu>
              </div>
            </CDropdown>
            <CDropdown
              popper={false}
              alignment="end"
              visible={profileVisibility}
              ref={profileMenu}
            >
              <CButton
                variant="ghost"
                className="menu-button focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
                onClick={() => {
                  setprofileVisibility(!profileVisibility);
                }}
              >
                <CImage src={PersonIcon} />
              </CButton>
              <div
                className={`outside-menu ${
                  visible ? "" : "toggled-off-searches-account"
                }`}
              >
                <CDropdownMenu className="dropdown-menu">
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      textAlign: "center",
                      marginBottom: "-10px",
                    }}
                  >
                    Welcome to cubotoo!
                  </div>
                  <CDropdownItem
                    href="#"
                    className="focus-yellow button-parent "
                  >
                    <CButton
                      color="dark"
                      className="log-in-button"
                      onClick={() => {
                        globalVariablesContext.setLoginModalVisibility(true);
                        setprofileVisibility(!profileVisibility);
                      }}
                    >
                      {" "}
                      Log In
                    </CButton>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <div className="newToCompany">
                    New to this company?
                    <span
                      className="start-here-text"
                      onClick={() => {
                        globalVariablesContext.setRegisterModalVisibility(true);
                        setprofileVisibility(!profileVisibility);
                      }}
                    >
                      Start here
                    </span>
                  </div>
                </CDropdownMenu>
              </div>
            </CDropdown>
            <CDropdown variant="nav-item" popper={false} alignment="end">
              <CDropdownToggle color="secondary">
                <CImage
                  rounded
                  src={topBarContext.currentFlag}
                  style={{ height: "35px", width: "35px" }}
                />{" "}
                <span style={{ color: "white" }}>
                  {topBarContext.currentLanguage}
                </span>
              </CDropdownToggle>
              <div className="language-menu">
                <CDropdownMenu className="dropdown-menu">
                  <CDropdownItem
                    href="#"
                    className="hover-yellow focus-yellow"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                    onClick={() => {
                      topBarContext.setCurrentLanguage("En");
                    }}
                  >
                    <div className="select-flag-wrapper overflow-hidden rounded-circle">
                      <CIcon icon={cifGb} height={20} className="select-flag" />
                    </div>
                    <span style={{ marginLeft: "8px" }}>English</span>
                  </CDropdownItem>
                  <CDropdownItem
                    href="#"
                    className="hover-yellow focus-yellow"
                    onClick={() => {
                      topBarContext.setCurrentLanguage("Ger");
                    }}
                  >
                    <CIcon icon={cifCh} size="lg" className="rounded-circle" />{" "}
                    <span style={{ marginLeft: "4px" }}>Deutch</span>
                  </CDropdownItem>
                  <CDropdownItem
                    href="#"
                    className="hover-yellow focus-yellow"
                    onClick={() => {
                      topBarContext.setCurrentLanguage("Fr");
                    }}
                  >
                    <CIcon icon={cifCh} size="lg" className="rounded-circle" />{" "}
                    <span style={{ marginLeft: "4px" }}>Français</span>
                  </CDropdownItem>
                  <CDropdownItem
                    href="#"
                    className="hover-yellow focus-yellow"
                    onClick={() => {
                      topBarContext.setCurrentLanguage("It");
                    }}
                  >
                    <CIcon icon={cifCh} size="lg" className="rounded-circle" />{" "}
                    <span style={{ marginLeft: "4px" }}>Italiano</span>
                  </CDropdownItem>
                </CDropdownMenu>
              </div>
            </CDropdown>
          </CNavbarNav>
        </CContainer>
      </CNavbar>
    </>
  );
}
