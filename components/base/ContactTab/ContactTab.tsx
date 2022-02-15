import React from 'react';
import { DropdownList } from 'components/domain';
import { useTabs } from 'hooks';
import { QaTypeAnswer } from 'pages/contacts';
import { Gapbox } from 'styles/commonCompo';
import * as S from './Style';

interface ContactTabProps {
  dataList: QaTypeAnswer[];
}

const ContactTab = ({ dataList }: ContactTabProps) => {
  const { currentItem, setCurrentIndex } = useTabs({ initialIndex: 0, allTabs: dataList });

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    setCurrentIndex(index);
  };

  return (
    <S.TabsWrapper>
      <S.TabHeader>
        <h2>자주 묻는 질문</h2>
        <S.ButtonWrapper>
          {React.Children.toArray(
            dataList.map(({ _, types }, index) => (
              <S.Button
                aria-label={types.key}
                isActive={currentItem.types.id === index + 1}
                onClick={(e) => handleClick(e, index)}
              >
                {types.name}
              </S.Button>
            )),
          )}
        </S.ButtonWrapper>
      </S.TabHeader>
      <Gapbox />
      <DropdownList list={currentItem.qas} />
    </S.TabsWrapper>
  );
};

export default ContactTab;
