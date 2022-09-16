import { ImageBackground } from 'react-native';

import { styles } from './styles';
import imgBackground from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
      source={imgBackground}
      defaultSource={imgBackground}
      style={styles.container} 
    >
      {children}
    </ImageBackground>
  );
}