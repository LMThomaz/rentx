import { useEffect, useState } from 'react';
import { Container } from './styles';
import { CarTDO } from '../../dtos/CarTDO';
import { api } from '../../services/api';

export function MyCars() {
  const [cars, setCars] = useState<CarTDO[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_by_user?user_id=1');
        setCars(response.data.car);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return <Container></Container>;
}
