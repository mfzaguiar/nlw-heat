import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 17,
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
  },
});
