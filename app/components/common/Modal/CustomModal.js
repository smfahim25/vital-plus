import React, { ReactNode } from "react";
import { Modal as AntModal } from "antd";
import styles from "./CustomModal.module.css";

const CustomModal = ({
  title,
  open,
  onCancel,
  children,
  footer,
  width = 600,
}) => {
  return (
    <AntModal
      title={null}
      open={open}
      onCancel={onCancel}
      footer={null}
      closable={false}
      width={width}
      className={styles.customModal}
      maskClosable={true}
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{title}</div>
          <button className={styles.closeButton} onClick={onCancel}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </AntModal>
  );
};

export default CustomModal;
