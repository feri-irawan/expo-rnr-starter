import dotenv from 'dotenv';
import { ConfigContext, ExpoConfig } from 'expo/config';
dotenv.config({ path: ['.env.local', '.env'] });

// ======================================================

const appName = 'Expo RNR Starter';
const appVersion = '1.0.0';
const identifier = 'com.expo-rnr-starter';
const slug = 'expo-rnr-starter';
const scheme = 'expo-rnr-starter';

// ======================================================

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) return `${identifier}.dev`;
  if (IS_PREVIEW) return `${identifier}.preview`;
  return identifier;
};

const getAppName = () => {
  if (IS_DEV) return `${appName} (Dev)`;
  if (IS_PREVIEW) return `${appName} (Preview)`;
  return appName;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: slug,
  version: appVersion,
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  scheme: scheme,
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
