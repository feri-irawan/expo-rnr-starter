import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { initI18n } from '../config';

const I18nInitializer: FC<PropsWithChildren> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initI18n().then(() => {
      setIsInitialized(true);
    });
  }, []);

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
};

export { I18nInitializer };
