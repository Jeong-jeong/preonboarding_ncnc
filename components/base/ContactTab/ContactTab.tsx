import React from 'react';
import { DropdownList } from 'components/domain';
import { useTabs } from 'hooks';
import { QaTypeAnswer } from 'pages/contacts';

interface ContactTabProps {
  dataList: QaTypeAnswer[];
}

const ContactTab = ({ dataList }: ContactTabProps) => {
  const { currentItem, setCurrentIndex } = useTabs({ initialIndex: 0, allTabs: dataList });
  const { qas, types } = currentItem;

  return (
    <section>
      {React.Children.toArray(
        dataList.map(({ qas, types }, index) => (
          <button onClick={() => setCurrentIndex(index)}>{types.name}</button>
        )),
      )}
      <DropdownList list={qas} />
    </section>
  );
};

export default ContactTab;
