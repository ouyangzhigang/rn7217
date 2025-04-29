const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // resolver: {
  //   resolveRequest: (context, moduleName, platform) => {
  //     if (moduleName.startsWith('@/')) {
  //       return context.resolveRequest(
  //         context,
  //         `src/${moduleName.slice(2)}`,
  //         platform,
  //       );
  //     }
  //     return context.resolveRequest(context, moduleName, platform);
  //   },
  // },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
