import axios from 'axios';
import { ICategory, ISoonItem, IQaTypes, IQas, INested } from 'types';
import ConItem from '../types/ConItem';

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-category1s`);
    return data.conCategory1s as ICategory[];
  } catch (e) {
    console.log('카테고리(대분류)API 에러');
  }
};

export const getSoonItems = async () => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-items/soon`);
    return data.conItems as ISoonItem[];
  } catch (e) {
    console.log('땡처리 API 에러');
  }
};

export const getNested = async (categoryId: number) => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-category1s/${categoryId}/nested`);
    return data.conCategory1 as INested;
  } catch (e) {
    console.log('브랜드+상품리스트 API 에러');
  }
};

export const getFAQTypes = async () => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/qa-types`);
    return data.qaTypes as IQaTypes[];
  } catch (e) {
    console.log('FAQ Types API 에러');
  }
};

export const getQas = async (qaTypeId: number) => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/qas?qaTypeId=${qaTypeId}`);
    return data.qas as IQas[];
  } catch (e) {
    console.log('Qas API 에러');
  }
};

export const getConItem = async (itemId: number) => {
  try {
    const { data } = await axios.get(`https://api2.ncnc.app/con-items/${itemId}`);
    return data.conItem as ConItem;
  } catch (e) {
    console.log('getConItem API 에러');
  }
};
