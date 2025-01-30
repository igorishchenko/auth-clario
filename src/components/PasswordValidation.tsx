"use client";

import React, { useEffect, useState } from "react";
import { FormikErrors } from "formik";
import classNames from "classnames";

import { IFormInput } from "@/types/auth";

import passwordStyles from "@/styles/inputs/password.module.scss";

interface Props {
  errors: FormikErrors<IFormInput>;
  passwordValue: string;
  isPasswordTouched?: boolean;
}

const PasswordValidation = ({
  errors,
  passwordValue,
  isPasswordTouched,
}: Props) => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    const newErrors: string[] = [];
    if (passwordValue) {
      if (passwordValue.length < 8) newErrors.push("minLength");
      if (passwordValue.length > 64) newErrors.push("maxLength");
      if (!/[A-Z]/.test(passwordValue)) newErrors.push("hasUpperCase");
      if (!/\d/.test(passwordValue)) newErrors.push("hasNumber");
      if (/\s/.test(passwordValue)) newErrors.push("noSpaces");
    }
    setValidationErrors(newErrors);
  }, [passwordValue]);

  const getClassNames = (errorType: string) =>
    classNames({
      [passwordStyles.invalid]:
        (isPasswordTouched && errors.password && !passwordValue) ||
        validationErrors.includes(errorType),
      [passwordStyles.valid]:
        passwordValue &&
        !errors.password &&
        !isPasswordTouched &&
        !validationErrors.includes(errorType),
      [passwordStyles.correct]:
        passwordValue && !validationErrors.includes(errorType),
    });

  return (
    <ul className={passwordStyles.passwordRequirements}>
      <li className={getClassNames("minLength")}>
        8 characters or more (no spaces)
      </li>
      <li className={getClassNames("hasUpperCase")}>
        Uppercase and lowercase letters
      </li>
      <li className={getClassNames("hasNumber")}>At least one digit</li>
    </ul>
  );
};

export default React.memo(PasswordValidation);
