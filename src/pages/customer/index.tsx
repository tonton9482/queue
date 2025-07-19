// pages/customer/index.tsx

import React, { useState } from 'react';
import ReceptionStart from './CustomerReceptionStart';
import ReceptionConfirm from './CustomerReceptionConfirm';
import Waiting from './Waiting';

const Reception: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['start']);
  const currentStep = history[history.length - 1]; // 今のページ名
  const goNext = (nextStep: string) => {
    setHistory([...history, nextStep]); // 進むときは追加
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1)); // 戻るときは最後を削除
    }
  };

  const [keyValue, setKeyValue] = useState<string>('');

  return (
    <>
      {currentStep === 'start' && (
        <ReceptionStart
          onNext={(value: string) => {
            setKeyValue(value);  // 受付キーを受け取って state に保存
            goNext('confirm');   // 画面遷移
          }}
        />
      )}

      {currentStep === 'confirm' && (
        <ReceptionConfirm
          onNext={(value: string) => {
            setKeyValue(value);  // 受付キーを受け取って state に保存
            goNext('waiting');   // 画面遷移
          }} onBack={goBack}
          keyValue={keyValue}
        />
      )}

      {currentStep === 'waiting' && (
        <Waiting
          onNext={() => goNext('nextPage')}
          keyValue={keyValue}
          onBack={goBack}
        />
      )}
    </>
  );
};

export default Reception;
