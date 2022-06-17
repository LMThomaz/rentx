import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRoutesName } from '../routes/stack.routes';

export function useNavigate() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRoutesName>>();
  return navigation;
}