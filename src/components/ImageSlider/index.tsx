import { FlatList } from 'react-native';
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={true} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
}
