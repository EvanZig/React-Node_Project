import React, { useContext } from "react";
import { useFormik } from "formik";
import {
  CForm,
  CButton,
  CFormInput,
  CInputGroup,
  CCardBody,
  CSpinner,
  CRow,
  CCol,
  CModal,
  CCard,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { mySchema, passwordErros } from "../schema/mySchema";
import signupBackgroundImage from "../images/bg-signup.png";
import { GlobalVariablesContext } from "../contexts/GlobalVariablesContext";
import { cilXCircle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
// import { http } from "../config/httpExample";
import { AuthContext } from "../contexts/Context";
import axios from "axios";

export default function Register() {
  const modalContext = useContext(GlobalVariablesContext);
  const authContext = useContext(AuthContext);

  const onSubmit = (values, actions) => {
    axios
      .post("http://localhost:5000/register", values)
      .then((response) => {
        const { idToken, refreshToken } = response.data;
        localStorage.setItem("idToken", idToken);
        localStorage.setItem("refreshToken", refreshToken);
        authContext.setAuthStatus("LoggedIn");
      })
      .catch((error) => {
        console.error(error);
      });

    // http
    //   .post("/register", values)
    //   .then((response) => {
    //     const { idToken, refreshToken } = response.data;
    //     localStorage.setItem("idToken", idToken);
    //     localStorage.setItem("refreshToken", refreshToken);
    //     authContext.setAuthStatus("LoggedIn");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    actions.resetForm();
  };

  const registerForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "+41",
    },
    validationSchema: mySchema,
    onSubmit,
  });

  const isSpinnerVisible = false;

  const openLoginModal = () => {
    modalContext.setRegisterModalVisibility(false);
    modalContext.setLoginModalVisibility(true);
  };

  return (
    <>
      <CButton
        onClick={() => {
          modalContext.setRegisterModalVisibility(true);
        }}
        className="mr-1"
      >
        Register
      </CButton>
      <div
        className={`flex-row ${
          modalContext.registerModalVisibility ? "d-flex" : "d-none"
        }`}
      >
        <CModal
          className="show d-block spartan-font"
          backdrop={true}
          keyboard={false}
          portal={false}
          size="xl"
          visible={modalContext.registerModalVisibility}
          onClose={() => {
            modalContext.setRegisterModalVisibility(false);
          }}
          alignment="center"
          style={{
            backgroundImage: `url(${signupBackgroundImage})`,
            backgroundSize: `cover`,
            borderRadius: `0px`,
          }}
        >
          <CRow className="justify-content-center">
            <CCol></CCol>
            <CCol className="col-lg-7">
              <CCard style={{ borderRadius: `0px`, height: "900px" }}>
                <div className=" d-flex flex-row justify-content-end align-items-end m-3">
                  <CIcon
                    role="button"
                    icon={cilXCircle}
                    className="icon-xl"
                    onClick={() => {
                      modalContext.setRegisterModalVisibility(false);
                    }}
                  />
                </div>
                <CForm onSubmit={registerForm.handleSubmit}>
                  <CCardBody className="m-5 p-xl-5">
                    <div className="d-flex flex-column mb-4">
                      <h2>Register</h2>
                    </div>

                    <CInputGroup className="mb-4">
                      <CFormInput
                        placeholder="First name"
                        // className="light-background"
                        name="firstName"
                        value={registerForm.values.firstName}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        className={
                          registerForm.errors.firstName &&
                          registerForm.touched.firstName
                            ? "input-error"
                            : ""
                        }
                      />
                    </CInputGroup>
                    {registerForm.errors.firstName &&
                      registerForm.touched.firstName && (
                        <p className="error">
                          ❌{registerForm.errors.firstName}
                        </p>
                      )}

                    <CInputGroup className="mb-4">
                      <CFormInput
                        placeholder="Last name"
                        // className="light-background"
                        name="lastName"
                        value={registerForm.values.lastName}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        className={
                          registerForm.errors.lastName &&
                          registerForm.touched.lastName
                            ? "input-error"
                            : ""
                        }
                      />
                    </CInputGroup>
                    {registerForm.errors.lastName &&
                      registerForm.touched.lastName && (
                        <p className="error">
                          ❌{registerForm.errors.lastName}
                        </p>
                      )}

                    <CInputGroup className="mb-4">
                      <CFormInput
                        type="email"
                        placeholder="E-mail"
                        // className="light-background"
                        name="email"
                        value={registerForm.values.email}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        className={
                          registerForm.errors.email &&
                          registerForm.touched.email
                            ? "input-error"
                            : ""
                        }
                      />
                    </CInputGroup>
                    {registerForm.errors.email &&
                      registerForm.touched.email && (
                        <p className="error">❌{registerForm.errors.email}</p>
                      )}

                    <CInputGroup className="mb-4">
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={registerForm.values.password}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        className={
                          registerForm.errors.password &&
                          registerForm.touched.password
                            ? "input-error"
                            : ""
                        }
                      />
                    </CInputGroup>
                    {registerForm.errors.password &&
                      registerForm.touched.password && (
                        <p className="error">{passwordErros}</p>
                      )}

                    <CInputGroup className="mb-4">
                      <CFormInput
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={registerForm.values.confirmPassword}
                        onChange={registerForm.handleChange}
                        onBlur={registerForm.handleBlur}
                        className={
                          registerForm.errors.confirmPassword &&
                          registerForm.touched.confirmPassword
                            ? "input-error"
                            : ""
                        }
                      />
                    </CInputGroup>
                    {registerForm.errors.confirmPassword &&
                      registerForm.touched.confirmPassword && (
                        <p className="error">
                          ❌{registerForm.errors.confirmPassword}
                        </p>
                      )}

                    {/* fix so its value is added with formik */}
                    <CInputGroup className="mb-4">
                      <PhoneInput
                        country={"ch"}
                        name="phone"
                        value={registerForm.values.phone}
                        onChange={(phone) =>
                          registerForm.setFieldValue("phone", phone)
                        }
                        onBlur={registerForm.handleBlur}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol>
                        <div className="d-flex justify-content-center align-items-end flex-column ">
                          <CButton
                            disabled={registerForm.isSubmitting}
                            type="submit"
                            className="px-4 mb-4 text-white bg-black"
                          >
                            {isSpinnerVisible ? (
                              <CSpinner
                                color="warning"
                                variant="grow"
                                size="sm"
                              />
                            ) : (
                              ""
                            )}
                            Register
                          </CButton>
                        </div>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCardBody className="d-flex mb-3">
                        <span>Already registered?</span>
                        <span
                          className="login-button-link px-4 link-dark fw-bolder"
                          onClick={() => openLoginModal()}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          Login
                        </span>
                      </CCardBody>
                    </CRow>
                  </CCardBody>
                </CForm>
              </CCard>
            </CCol>
          </CRow>
        </CModal>
      </div>
    </>
  );
}
