import React from 'react';
import { View, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from 'ui/router/Router';

import Button from 'ui/components/inputs/Button/Button';

type NavigationProp = StackNavigationProp<RootStackParamsList, 'Index'>;

interface IndexProps {
  navigation: NavigationProp;
}

const Index: React.FC<IndexProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        mode={'contained'}
        onPress={() => navigation.navigate('EncontrarDiaristas') }
      >
        Encontrar Diarista
      </Button>
    </View>
  );
}

export default Index;