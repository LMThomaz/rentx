import { RectButtonProps } from 'react-native-gesture-handler';
import GasolineSvg from '../../assets/gasoline.svg';
import { CarTDO } from '../../dtos/CarTDO';
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from './styles';

interface Props extends RectButtonProps {
  data: CarTDO;
}

export function Car({ data, ...rest }: Props) {
  const { brand, name, rent, thumbnail } = data;

  return (
    <Container {...rest}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{`R$ ${rent.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: thumbnail,
        }}
        resizeMode='contain'
      />
    </Container>
  );
}
