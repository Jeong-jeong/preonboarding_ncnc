import React, { useEffect } from 'react';
import { Dropdown } from 'components/base';
import { useClickedId } from 'hooks';
import { QasListType } from 'pages/contacts';
interface DropdownListProps {
  list: QasListType;
}

const DropdownList = ({ list }: DropdownListProps) => {
  const { clickedId, setClickedId, handleClickedId } = useClickedId('li');

  useEffect(() => {
    setClickedId(0);
  }, [list]);

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
