import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export function SignInBox() {
  const { signIn, isSignIng } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Entrar com github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSignIng}
      />
    </View>
  );
}
