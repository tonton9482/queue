// Modal.tsx
import React from 'react';
import styles from './Modal.module.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: React.ReactNode;
    description?: React.ReactNode;
    confirmText?: React.ReactNode;
    cancelText?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, title, description, confirmText = 'はい',    // ← デフォルト値
    cancelText = '戻る', }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                {/* タイトル */}
                <h2 className={styles.modalTitle}>{title}</h2>

                {/* 説明文（任意） */}
                {description && <p className={styles.modalDescription}>{description}</p>}

                {/* ボタン */}
                <div className={styles.modalButton__cont}>
                    <button className={`${styles.modalButton__item} ${styles.confirmButton}`} onClick={onConfirm}>
                        {confirmText}
                    </button>
                    <button className={`${styles.modalButton__item} ${styles.cancelButton}`} onClick={onClose}>
                        {cancelText}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Modal;
