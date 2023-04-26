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

export default function TopBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-black">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
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
                  variant="outline"
                  style={{ backgroundColor: "rgba(255,220,0,250)" }}
                >
                  <CImage src={SearchIcon} />
                </CButton>
              </CForm>
            </CNavbarNav>
          </CCollapse>
          <CNavbarNav>
            <CDropdown variant="nav-item" popper={false} alignment="end">
              <CDropdownToggle color="secondary">EN</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">
                  <CIcon
                    icon={cifGb}
                    size="lg"
                    height={11}
                    className="select-language__flag rounded-circle"
                  />{" "}
                  English
                </CDropdownItem>
                <CDropdownItem href="#">
                  <CIcon
                    icon={cifCh}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Deutsch
                </CDropdownItem>
                <CDropdownItem href="#">
                  <CIcon
                    icon={cifFr}
                    size="lg"
                    className="select-language__flag rounded-circle"
                  />{" "}
                  Français
                </CDropdownItem>
                <CDropdownItem href="#">
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
