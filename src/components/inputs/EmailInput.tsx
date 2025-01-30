"use client";

import React from "react";
import { Field, FormikErrors, FormikTouched } from "formik";
import classNames from "classnames";

import { IFormInput } from "@/types/auth";

import styles from "@/styles/inputs/shared.module.scss";

import ValidationError from "../ValidationError";

interface Props {
  touched: FormikTouched<IFormInput>;
  errors: FormikErrors<IFormInput>;
  isSubmitting: boolean;
}

const EmailInput = ({ touched, errors, isSubmitting }: Props) => (
  <div className={styles.inputField}>
    <Field
      type="email"
      name="email"
      placeholder="Email"
      disabled={isSubmitting}
      className={classNames(styles.input, {
        [styles.error]: touched.email && errors.email,
        [styles.valid]: touched.email && !errors.email,
      })}
    />
    {touched.email && <ValidationError error={errors.email} />}
  </div>
);

export default React.memo(EmailInput);
