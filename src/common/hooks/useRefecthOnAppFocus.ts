import { focusManager } from '@tanstack/react-query';
import { AppStateStatus, Platform } from 'react-native';
import { useAppState } from './useAppState';

const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
};

export const useRefetchOnAppFocus = () => {
  useAppState(onAppStateChange);
};
