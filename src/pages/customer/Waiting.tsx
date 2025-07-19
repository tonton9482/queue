// Waiting.tsx
import React from 'react';
import { useModal } from '../../components/Modal/useModal';
import { motion } from 'framer-motion';
import CommonModal from '../../components/Modal';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import icons from '../../assets/svg';
import Footer from '../../components/Footer';
import styles from '../customer/Waiting.module.css';

// import clsx from 'clsx';

type Props = {
  onNext: () => void; // ← これを追加
  onBack: () => void;
  keyValue: string;

};
console.log(icons.man);

const ReceptionPage: React.FC<Props> = ({ onBack, keyValue }) => {
  const { isOpen, open, close } = useModal();

  return (
    <motion.main
      className="globalPadding"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <section className={styles.wait__wrap}>
          {/* メイン見出し */}
          <section className='py-4rem'>
            <Heading
              tag="h1"
              variant="XXL"
              align="center"
              color='text-white'
              label="並び中…"
            />

            <div className='py-4rem'>
              <Heading
                tag="p"
                variant="M"
                align="center"
                color='text-white'
                weight='reg'
                label="施設名がここに入ります"
              />
              <Heading
                tag="p"
                variant="M"
                align="center"
                color='text-white'
                weight='reg'
                label={`受付キー：${keyValue}`}
              />
            </div>

            <div className={styles.wait__num}>
              <p>あと</p>
              <div className={styles.wait__num__count}>
                <span className={styles.wait__num__text}>10</span>
              </div>
              <p className={styles.wait__num__kumi}>組</p>
            </div>
          </section>
        </section>

        <section>
          <div>
          </div>

          <div className={styles.progress__container}>
            <div className={styles.progress__track}>
              <div className={styles.progress__fill}></div>
            </div>

            <div className={styles.person__icon}>
              <icons.man className={`btn-icon ${styles.person__icon__svg}`} />
            </div>

            <div className={styles.flag__icon}>
              <icons.flag className={`btn-icon ${styles.person__icon__svg}`} />
            </div>
          </div>
        </section>

        {/* <div className='pb-2_4rem'>
          <Button
            fontSize="sm"
            variant="hurryUp"
            icon="fire"
            label="はやく！！"
          />
        </div> */}

        <div className='py-4rem pb-2_4rem'>
          <Button
            fontSize="sm"
            variant="outline"
            label="キャンセルする"
            icon="close"
            onClick={open} // ← ここでモーダルを開く！

          />
        </div>

        <CommonModal
          isOpen={isOpen}
          onClose={close}
          onConfirm={() => {
            close();
            onBack(); // ← キャンセル確定で前の画面へ
          }}
          title="本当にキャンセルしますか？"
          description="現在の順番と入力内容が消去されます。"
          confirmText="キャンセルする"
        />

        <Footer />

    </motion.main>

  );
};

export default ReceptionPage;
