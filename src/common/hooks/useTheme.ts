import { useColorScheme } from 'nativewind';
import { THEME } from '../lib/theme';

const useTheme = () => {
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';
  return THEME[scheme];
};

export default useTheme;
