/*
 * @Date: 2020-08-30 09:48:24
 * @LastEditTime: 2020-08-30 09:49:44
 */
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
