import { GetStaticProps } from 'next';
import styled from 'styled-components';
import React from 'react';
import { getFAQTypes, getQas } from 'api';
import { IQas } from 'types';
import QaType from 'types/QaType';
import { ContactTab } from 'components/base';

const ContactPageWrapper = styled.div``;

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
    <ContactPageWrapper>
      <section>
        <h2>상담시간 안내</h2>
        <p>평일 10:00 ~ 18:00</p>
        <p>점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무</p>
      </section>
      <section>
        <h2>자주 묻는 질문</h2>
        <ContactTab dataList={qaTypeAnswer} />
      </section>
    </ContactPageWrapper>
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
