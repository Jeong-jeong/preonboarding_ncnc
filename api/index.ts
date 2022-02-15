import axios from 'axios';
import { Category, SoonItem, QaTypes, Qas, Nested } from 'types';

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-category1s`);
    return data.conCategory1s as Category[];
  } catch (e) {
    console.log('카테고리(대분류)API 에러');
  }
};

export const getSoonItems = async () => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-items/soon`);
    return data.conItems as SoonItem[];
  } catch (e) {
    console.log('땡처리 API 에러');
  }
};

export const getNested = async (categoryId: number) => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-category1s/${categoryId}/nested`);
    return data.conCategory1 as Nested;
  } catch (e) {
    console.log('브랜드+상품리스트 API 에러');
  }
};
