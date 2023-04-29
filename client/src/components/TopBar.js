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

export default function TopBar() {
  const topBarContext = useContext(TopBarContext);
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
        <CContainer fluid>
          <CNavbarBrand href="#" className="navbar-logo">
            <span style={{ color: "white" }}>Some Company Logo</span>
          </CNavbarBrand>
          <CNavbarToggler
            onClick={() => setVisible(!visible)}
            visible={false}
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
                className="focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
                onClick={toggleFavorites}
              >
                <CImage src={HeartIcon} />
              </CButton>
              <CDropdownMenu>
                <CDropdownItem href="#" className="hover-yellow focus-yellow">
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
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
                  >
                    {" "}
                    Start here
                  </CButton>
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown
              popper={false}
              alignment="end"
              ref={cartMenu}
              visible={cartVisibility}
            >
              <CButton
                variant="ghost"
                className="focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
                onClick={toggleCart}
              >
                <CImage src={CartIcon} />
              </CButton>
              <CDropdownMenu>
                <CDropdownItem href="#" className="hover-yellow focus-yellow">
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
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
                  >
                    {" "}
                    Start here
                  </CButton>
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown
              popper={false}
              alignment="end"
              visible={profileVisibility}
              ref={profileMenu}
            >
              <CButton
                variant="ghost"
                className="focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
                onClick={() => {
                  setprofileVisibility(!profileVisibility);
                }}
              >
                <CImage src={PersonIcon} />
              </CButton>
              <CDropdownMenu>
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
                <CDropdownItem href="#" className="focus-yellow button-parent ">
                  <CButton color="dark" className="log-in-button">
                    {" "}
                    Log In
                  </CButton>
                </CDropdownItem>
                <CDropdownDivider />
                <div className="newToCompany">
                  New to this company?{" "}
                  <span className="start-here-text">Start here</span>
                </div>
              </CDropdownMenu>
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
              <CDropdownMenu>
                <CDropdownItem
                  href="#"
                  className="hover-yellow focus-yellow"
                  onClick={() => {
                    topBarContext.setCurrentLanguage("En");
                  }}
                >
                  <CIcon
                    icon={cifGb}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  English
                </CDropdownItem>
                <CDropdownItem
                  href="#"
                  className="hover-yellow focus-yellow"
                  onClick={() => {
                    topBarContext.setCurrentLanguage("Ger");
                  }}
                >
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Deutsch
                </CDropdownItem>
                <CDropdownItem
                  href="#"
                  className="hover-yellow focus-yellow"
                  onClick={() => {
                    topBarContext.setCurrentLanguage("Fr");
                  }}
                >
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Français
                </CDropdownItem>
                <CDropdownItem
                  href="#"
                  className="hover-yellow focus-yellow"
                  onClick={() => {
                    topBarContext.setCurrentLanguage("It");
                  }}
                >
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Italiano
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CContainer>
      </CNavbar>
    </>
  );
}
