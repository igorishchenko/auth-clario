"use client";

import React from "react";
import styles from "@/styles/inputs/shared.module.scss";

interface Props {
  error?: string;
}

const ValidationError = ({ error }: Props) => {
  if (!error) return null;

  return <p className={styles.error}>{error}</p>;
};

export default React.memo(ValidationError);
