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
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { cifCh, cifFr, cifGb, cifIt } from "@coreui/icons-pro";
import CIcon from "@coreui/icons-react";
import SearchIcon from "../images/svgs/search.svg";
import CartIcon from "../images/svgs/cart4.svg";
import HeartIcon from "../images/svgs/heart.svg";
import PersonIcon from "../images/svgs/person.svg";
import UkFlag from "../images/svgs/Flag_of_the_United_Kingdom.svg";
import "../Styles/TopBarStyles.css";

export default function TopBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-black">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <span style={{ color: "white" }}>Some Company Logo</span>
            <CImage></CImage>
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CForm className="d-flex">
                <CFormInput
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
                <CFormInput
                  type="search"
                  className="me-2"
                  placeholder="All"
                  style={{ maxWidth: "150px" }}
                />
                <CFormInput
                  type="search"
                  className="me-2"
                  placeholder="Country"
                />
                <CButton
                  type="submit"
                  variant="ghost"
                  style={{ backgroundColor: "rgba(255,220,0,250)" }}
                >
                  <CImage src={SearchIcon} />
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
                <CDropdownItem href="#" className="focus-yellow">
                  Action
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  Another action
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  Something else here
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
                <CDropdownItem href="#" className="focus-yellow">
                  Action
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  Another action
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  Something else here
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
                <CDropdownItem href="#" className="focus-yellow">
                  Something else here
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="nav-item" popper={false} alignment="end">
              <CDropdownToggle color="secondary">
                <CImage src={UkFlag} />{" "}
                <span style={{ color: "white" }}>EN</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#" className="focus-yellow">
                  <CIcon
                    icon={cifGb}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  English
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Deutsch
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  <CIcon
                    icon={cifFr}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Français
                </CDropdownItem>
                <CDropdownItem href="#" className="focus-yellow">
                  <CIcon
                    icon={cifIt}
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
