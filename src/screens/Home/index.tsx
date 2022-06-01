import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { StackRoutesName } from '../../routes/stack.routes';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { CarTDO } from '../../dtos/CarTDO';

export function Home() {
  const [cars, setCars] = useState<CarTDO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRoutesName>>();
  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
}
