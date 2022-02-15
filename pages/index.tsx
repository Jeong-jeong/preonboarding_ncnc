import React from 'react';
import { Header } from 'components/base';
import { ProductionList, Swiper, CategoryList } from 'components/domain';
import { getCategories, getSoonItems } from 'api';
import { useAxios } from 'hooks';
import { ISoonItem, ICategory } from 'types';
import * as S from './Style';

interface HomeProps {
  data: {
    categories: ICategory[];
  };
}

const Home = ({ data }: HomeProps) => {
  const [imageState, setImageState] = useState(true);
  const { categories } = data;
  const soonItems = useAxios<ISoonItem[]>(getSoonItems);

  return (
    <>
      <Header setImageState={setImageState} />
      <S.SwiperWrapper>{imageState && <Swiper />}</S.SwiperWrapper>
      <S.CategoriesWrapper>
        <CategoryList categories={categories} size={43} />
      </S.CategoriesWrapper>
      <S.ItemListWrapper>
        <S.SubTitle>놓치지 마세요</S.SubTitle>
        <S.ItemTitle>오늘의 땡처리콘!</S.ItemTitle>
        <S.ProductionListWrapper>
          {imageState && soonItems && <ProductionList conItems={soonItems} />}
        </S.ProductionListWrapper>
      </S.ItemListWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const categories = await getCategories();

  return { props: { data: { categories } } };
};

export default Home;
