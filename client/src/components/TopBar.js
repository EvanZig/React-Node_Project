import { useState } from "react";
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
import UkFlag from "../images/svgs/Flag_of_the_United_Kingdom.svg";
import SearchBlack from "../images/svgs/search-black.svg";
import SearchIcon from "../images/svgs/search.svg";
import FunnelIcon from "../images/svgs/funnel.svg";
import VectorIcon from "../images/svgs/vector.svg";
import "../Styles/TopBarStyles.css";

export default function TopBar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CNavbar expand="lg" colorScheme="dark" className="bg-black text-white">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <span style={{ color: "white" }}>Some Company Logo</span>
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
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
          <CNavbarNav>
            <CDropdown popper={false} alignment="end">
              <CDropdownToggle
                variant="ghost"
                className="focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
              >
                <CImage src={HeartIcon} />
              </CDropdownToggle>
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
                <div class="newToCompany">New to this company?</div>
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
            <CDropdown popper={false} alignment="end">
              <CDropdownToggle
                variant="ghost"
                className="focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
              >
                <CImage src={CartIcon} />
              </CDropdownToggle>
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
                <div class="newToCompany">New to this company?</div>
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
            <CDropdown popper={false} alignment="end">
              <CDropdownToggle
                variant="ghost"
                className="focus-yellow hover-yellow remove-arrow active-yellow"
                shape="rounded-pill"
              >
                <CImage src={PersonIcon} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#" className="focus-yellow">
                  Action
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  Another action
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#" className="focus-yellow">
                  Something else here
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="nav-item" popper={false} alignment="end">
              <CDropdownToggle color="secondary">
                <CImage rounded src={UkFlag} />{" "}
                <span style={{ color: "white" }}>EN</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#" className="hover-yellow focus-yellow">
                  <CIcon
                    icon={cifGb}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  English
                </CDropdownItem>
                <CDropdownItem href="#" className="hover-yellow focus-yellow">
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Deutsch
                </CDropdownItem>
                <CDropdownItem href="#" className="hover-yellow focus-yellow">
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Français
                </CDropdownItem>
                <CDropdownItem href="#" className="hover-yellow focus-yellow">
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
