import React, { useContext } from "react";
import {
  CForm,
  CButton,
  CInputGroup,
  CCardBody,
  CSpinner,
  CRow,
  CCol,
  CCard,
  CFormInput,
  CModal,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import loginBackgroundImage from "../images/bg-login.png";
import { MainPageContext } from "../contexts/MainPageContext";
import { cilXCircle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useFormik } from "formik";
import { mySchema } from "../schema/mySchema";
import { http } from "../config/httpExample";

export default function Login() {
  const modalContext = useContext(MainPageContext);
  const isSpinnerVisible = false;

  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };

  const loginForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: mySchema,
    onSubmit,
  });

  const openRegisterModal = () => {
    modalContext.setLoginModalVisibility(false);
    modalContext.setRegisterModalVisibility(true);
  };

  return (
    <>
      <CButton
        onClick={() => {
          modalContext.setLoginModalVisibility(true);
        }}
        className="mr-1"
      >
        Login
      </CButton>
      <CModal
        className="show d-block spartan-font"
        backdrop={true}
        keyboard={false}
        portal={false}
        size="xl"
        onClose={() => modalContext.setLoginModalVisibility(false)}
        visible={modalContext.loginModalVisibility}
        alignment="center"
        style={{
          backgroundImage: `url(${loginBackgroundImage})`,
          backgroundSize: `cover`,
          borderRadius: `0px`,
        }}
      >
        <CRow className="justify-content-end">
          <CCol></CCol>
          <CCol className="col-lg-7">
            <CCard style={{ borderRadius: `0px` }}>
              <div className=" d-flex flex-row justify-content-end align-items-end m-3">
                <CIcon
                  role="button"
                  icon={cilXCircle}
                  className="icon-xl"
                  onClick={() => modalContext.setLoginModalVisibility(false)}
                />
              </div>
              <CCardBody className="m-5 p-xl-5">
                <div className="d-flex flex-column mb-4">
                  <h2>Log in</h2>
                </div>
                <CForm id="main">
                  <CInputGroup className="mb-4">
                    <CFormInput
                      placeholder="E-mail"
                      name="email"
                      value={loginForm.values.email}
                      onChange={loginForm.handleChange}
                      onBlur={loginForm.handleBlur}
                      className={
                        loginForm.errors.email && loginForm.touched.email
                          ? "input-error"
                          : ""
                      }
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      className="light-background"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol>
                      <span
                        className="login-button-link color-black link-dark"
                        // onClick={() => openRequestCodeModal()}
                      ></span>
                      <div className="d-flex justify-content-center align-items-end flex-column ">
                        <CButton
                          //   disabled={isValid}
                          //   onClick={signInClicked}
                          className="px-4 mb-4 text-white bg-black position-relative"
                        >
                          {isSpinnerVisible ? (
                            <CSpinner
                              color="warning"
                              variant="grow"
                              size="sm"
                            />
                          ) : (
                            "Log in"
                          )}
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCardBody className="d-flex mb-3">
                      <span>Are you new?</span>
                      <span
                        className="login-button-link px-4 link-dark fw-bolder"
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => openRegisterModal()}
                      >
                        Sign up
                      </span>
                    </CCardBody>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CModal>
    </>
  );
}
