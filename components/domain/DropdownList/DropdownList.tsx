import React from 'react';
import { Dropdown } from 'components/domain';
import { useClickedId } from 'hooks';
import { QasListType } from 'pages/contacts';
interface DropdownListProps {
  list: QasListType;
}

const DropdownList = ({ list }: DropdownListProps) => {
  const { clickedId, handleClickedId } = useClickedId();

  return (
    <ul>
      {React.Children.toArray(
        list.map(({ id, question, answer }) => (
          <Dropdown
            id={id}
            clickedId={clickedId}
            question={question}
            answer={answer}
            handleClickedId={handleClickedId}
          />
        )),
      )}
    </ul>
  );
};

export default DropdownList;
