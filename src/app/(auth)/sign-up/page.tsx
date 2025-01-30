"use client";

import React from "react";
import { Formik, Form } from "formik";

import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";

import { validationSchema } from "@/validation/signUp.scheme";

import styles from "@/styles/login.module.scss";
import { IFormInput } from "@/types/auth";

const initialValues: IFormInput = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const onSubmit = (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log("Form Data:", values);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.signUpHeading}>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
        validateOnSubmit={true}
      >
        {({
          isSubmitting,
          touched,
          errors,
          values,
          handleBlur,
          handleChange,
        }) => (
          <Form className={styles.loginForm}>
            <div className={styles.inputsContainer}>
              <div className={styles.formGroup}>
                <EmailInput
                  errors={errors}
                  touched={touched}
                  isSubmitting={isSubmitting}
                />
              </div>
              <div className={styles.formGroup}>
                <PasswordInput
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
