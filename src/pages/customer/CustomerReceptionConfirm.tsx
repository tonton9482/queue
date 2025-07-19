// ReceptionConfirm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import icons from '../../assets/svg';
import Footer from '../../components/Footer';
import styles from '../customer/CustomerReceptionConfirm.module.css';
// import clsx from 'clsx';

type Props = {
  onNext: (key: string) => void;
  onBack: () => void;
  keyValue: string;

};




const ReceptionPage: React.FC<Props> = ({ onNext, onBack, keyValue }) => {

  const [count, setCount] = useState(1);


  return (
    <motion.main
      className="globalPadding"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >

        <section className='confirm'>
          {/* メイン見出し */}
          <div className='pb-4rem'>
            <Heading
              tag="h1"
              variant="XL"
              align="center"
              color='primary'
              label="受付の確認"
            />
          </div>

          <section className={styles.confirm__status}>
            <Heading
              tag="p"
              variant="M"
              align="center"
              color='text-gray-900'
              label="施設名がここに入ります"
            />
            <Heading
              tag="p"
              variant="M"
              align="center"
              color='text-gray-900'
              weight='reg'
              label={`受付キー：${keyValue}`}
            />
            <section className={styles.confirm__status__wrap}>
              <ul className={styles.confirm__status__cont}>
                <li className={styles.confirm__status__item}>
                  <div className={styles.confirm__status__item__txt}>
                    <icons.man className={`btn-icon ${styles.person__icon__svg}`} />
                    <p>現在の待ち状況</p>
                  </div>
                  <span className={styles.confirm__status__num}>10<span className={styles.confirm__status__num_kumi}>組</span></span>
                </li>
                <li className={styles.confirm__status__item}>
                  <div className={styles.confirm__status__item__txt}>
                    <icons.time className={`btn-icon ${styles.time__icon__svg}`} />
                    <p>先頭が並んだのは</p>
                  </div>
                  <span className={styles.confirm__status__num}>40<span className={styles.confirm__status__num_kumi}>分前</span></span>
                </li>
              </ul>
            </section>
          </section>

          <form className={styles.form__cont}>
            <div className={styles.form__group}>
              <label className={styles.form__label}>
                人数（最大10人）<span className={styles.form__required}>*</span>
              </label>

              <select
                className={styles.form__select}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>{num}人</option>
                ))}
              </select>

            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label}>
                お席の希望<span className={styles.form__required}>*</span>
              </label>
              <div className={styles.select__wrap}>
                <select className={styles.form__select}>
                  <option value="">特になし</option>
                  <option value="together">一緒の席</option>
                  <option value="together">別々OK</option>
                </select>
              </div>
            </div>

          </form>

          <div className='py-4rem pb-2_4rem'>
            <Button
              fontSize="sm"
              variant="primary"
              icon="flag"
              label="並ぶ"
              onClick={() => onNext(keyValue)}
            />
          </div>

          <div className='pb-2_4rem'>
            <Button
              fontSize="sm"
              variant="outline"
              label="戻る"
              onClick={onBack}
            />
          </div>
        </section>

        <Footer />

    </motion.main>

  );
};

export default ReceptionPage;
