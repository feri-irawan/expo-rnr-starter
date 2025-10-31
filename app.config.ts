import { ExpoConfig, ConfigContext } from 'expo/config';
import dotenv from 'dotenv';

dotenv.config({ path: ['.env.local', '.env'] });

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) return 'com.expo-rnr-starter.dev';
  if (IS_PREVIEW) return 'com.expo-rnr-starter.preview';
  return 'com.expo-rnr-starter';
};

const getAppName = () => {
  if (IS_DEV) return 'expo-rnr-starter (Dev)';
  if (IS_PREVIEW) return 'expo-rnr-starter (Preview)';
  return 'expo-rnr-starter';
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'expo-rnr-starter',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  scheme: 'expo-rnr-starter',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    edgeToEdgeEnabled: true,
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: getUniqueIdentifier(),
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './src/assets/images/favicon.png',
  },
  plugins: ['expo-router'],
  experiments: {
    typedRoutes: true,
  },
});
