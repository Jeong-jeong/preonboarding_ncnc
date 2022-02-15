import { GetStaticProps } from 'next';
import React from 'react';
import { getFAQTypes, getQas } from 'api';
import { IQas } from 'types';
import QaType from 'types/QaType';
import { ContactTab } from 'components/base';
import { Gapbox } from 'styles/commonCompo';
import * as S from './Style';

export type QaTypeAnswer = { types: QaType; qas: IQas[] };
export type QasListType = QaTypeAnswer['qas'];

interface ContactPageProps {
  data: {
    qaTypeAnswer: QaTypeAnswer[];
  };
}

const ContactPage = ({ data }: ContactPageProps) => {
  const { qaTypeAnswer } = data;

  return (
    <S.ContactPageWrapper>
      <S.ContactInfos>
        <h2>상담시간 안내</h2>
        <p>평일 10:00 ~ 18:00</p>
        <p className="putGray">점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무</p>
      </S.ContactInfos>
      <Gapbox />
      <ContactTab dataList={qaTypeAnswer} />
    </S.ContactPageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const qaTypes = (await getFAQTypes())!;
  const qas = await Promise.all(qaTypes.map(({ id }) => getQas(id)));

  const qaTypeAnswer = qaTypes.reduce((object, _, index) => {
    object.push({
      types: qaTypes[index],
      qas: qas[index]!,
    });
    return object;
  }, [] as QaTypeAnswer[]);

  return { props: { data: { qaTypeAnswer } } };
};

export default ContactPage;
