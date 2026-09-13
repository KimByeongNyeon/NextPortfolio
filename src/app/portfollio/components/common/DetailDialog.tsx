"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { FiX } from "react-icons/fi";
import styles from "../main/Portfolio.module.css";

interface DetailDialogProps {
  title: string;
  label: string;
  children: ReactNode;
  onClose: () => void;
}

export default function DetailDialog({ title, label, children, onClose }: DetailDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="detail-dialog-title"
      className={styles.dialog}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.dialogInner}>
        <div className={styles.dialogBar}>
          <span className={styles.eyebrow}>{label}</span>
          <button type="button" autoFocus onClick={onClose} className={styles.iconButton} aria-label="상세 내용 닫기">
            <FiX size={22} />
          </button>
        </div>
        <div className={styles.dialogBody}>
          <h2 id="detail-dialog-title" className={styles.dialogTitle}>{title}</h2>
          {children}
        </div>
      </div>
    </dialog>
  );
}
