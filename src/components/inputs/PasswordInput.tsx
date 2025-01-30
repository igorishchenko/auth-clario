"use client";

import React, { useState } from "react";
import { Field, FormikErrors, FormikTouched } from "formik";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import sharedInputStyles from "@/styles/inputs/shared.module.scss";
import passwordStyles from "@/styles/inputs/password.module.scss";
import { IFormInput } from "@/types/auth";

import PasswordValidation from "../PasswordValidation";

interface Props {
  touched: FormikTouched<IFormInput>;
  errors: FormikErrors<IFormInput>;
  values: IFormInput;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}

const PasswordInput = ({
  touched,
  errors,
  values,
  handleBlur,
  handleChange,
  isSubmitting,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [blurredPassword, setBlurredPassword] = useState("");

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(event);
    setBlurredPassword(values.password);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    setBlurredPassword(event.target.value);
  };

  return (
    <div className={sharedInputStyles.inputField}>
      <div className={passwordStyles.passwordWrapper}>
        <Field
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Create your password"
          className={classNames(sharedInputStyles.input, {
            [sharedInputStyles.error]: touched.password && errors.password,
            [sharedInputStyles.valid]: touched.password && !errors.password,
          })}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className={passwordStyles.passwordIcon}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      </div>
      <PasswordValidation
        errors={errors}
        passwordValue={blurredPassword}
        isPasswordTouched={touched.password}
      />
    </div>
  );
};

export default React.memo(PasswordInput);
