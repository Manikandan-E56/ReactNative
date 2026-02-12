const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });

// const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// config.resolver = {
//   ...config.resolver,
//   sourceExts: [...config.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx'],
// };

// module.exports = config;
