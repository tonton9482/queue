// ReceptionStart.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import styles from '../customer/CustomerReceptionStart.module.css';
import clsx from 'clsx';

type Props = {
  onNext: (key: string) => void;
};

const ReceptionPage: React.FC<Props> = ({ onNext }) => {
  // 入力・削除
  const [inputValues, setInputValues] = useState<string[]>([]);

  // 入力キー整形：xxx-yyy形式
  const formatKey = (values: string[]) => {
    const key = values.join('');
    return `${key.slice(0, 3)}-${key.slice(3)}`;
  };

  // キーボード入力処理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[a-z0-9]$/i.test(e.key)) {
        setInputValues(prev => {
          if (prev.length >= 6) return prev;
          return [...prev, e.key];
        });
      } else if (e.key === 'Backspace' || e.key === 'Delete') {
        setInputValues(prev => prev.slice(0, -1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // カメラ読み取り
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCameraStart = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
    } catch (error) {
      console.error('カメラの起動に失敗しました', error);
    }
  };

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  const handleNextClick = () => {
    if (inputValues.length !== 6) return; // 不完全なら何もしない
    const formatted = formatKey(inputValues);
    onNext(formatted); // 🔸 親へ渡す
  };


  return (
    <motion.main
      className="globalPadding"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        <section className='keyInput'>
          <div className='pb-4rem'>
            <Heading tag="h1" variant="XL" align="center" color='primary' label="受付をしましょう" />
          </div>

          <div className='keyInputArea'>
            <div className='pd-2_4rem'>
              <Heading tag="p" variant="M" align="center" color='text-gray-700' label="キー入力で受付" />
            </div>

            <button className={styles.deleteButton} onClick={() => setInputValues([])}>
              削除
            </button>

            <ul className={styles.keySlots__cont}>
              {Array(6).fill(null).map((_, i) => (
                <li
                  key={i}
                  className={clsx(
                    styles.keySlots__item,
                    i === inputValues.length && inputValues.length < 6 && styles.active
                  )}
                >
                  {inputValues[i] || ''}
                </li>
              ))}
            </ul>

            <div className='py-4rem'>
              <Button
                fontSize="sm"
                variant="primary"
                label="受付の確認"
                onClick={handleNextClick}
                disabled={inputValues.length < 6}
              />
            </div>
          </div>
        </section>

        <div className={styles.divider}>
          <span className={styles.dividerLabel}>もしくは</span>
        </div>

        <section className='qrInput'>
          <Heading
            tag="p"
            variant="M"
            align="center"
            color="text-gray-700"
            weight='bold'
            label="QRコード読み取りで受付"
          />
        </section>

        <section className={clsx(styles.qrInputArea, 'ptx-4rem')}>
          <Heading
            tag="h2"
            variant="L"
            align="center"
            color="text-gray-700"
            weight='bold'
            label={<>カメラへのアクセスが<br />必要です。</>}
          />

          <div className={styles.qrInputArea__txt}>
            <Heading
              tag="p"
              variant="M"
              align="center"
              color="primary"
              weight='bold'
              label="ボタンを押して“許可”を選んでください"
            />
          </div>

          <div className='py-4rem'>
            <Button
              fontSize="sm"
              variant="primary"
              label="カメラを許可する"
              onClick={handleCameraStart}
            />
          </div>

          {/* カメラ映像の表示用 video 要素 */}
          <video ref={videoRef} autoPlay playsInline style={{ width: '100%', display: videoStream ? 'block' : 'none' }} />
        </section>

        <Footer />
      </motion.main>
      );
};

      export default ReceptionPage;
