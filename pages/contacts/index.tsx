import { GetStaticProps } from 'next';
import styled from 'styled-components';
import React from 'react';
import { getFAQTypes, getQas } from 'api';
import { Qas } from '../../types';
import QaType from '../../types/QaType';

const ContactPageWrapper = styled.div``;

type QaTypeAnswer = { types: QaType; qas: Qas[] };

interface ContactPageProps {
  data: {
    qaTypeAnswer: QaTypeAnswer[];
  };
}

const ContactPage = ({ data }: ContactPageProps) => {
  const { qaTypeAnswer } = data;
  return <ContactPageWrapper>CategoryPageWrapper</ContactPageWrapper>;
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
