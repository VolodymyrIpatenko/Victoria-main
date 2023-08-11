import React from 'react';

type FilterItem = (arg: string) => void;
interface Props {
  filterItem: FilterItem;
}

const ButtonsList = React.memo(({ filterItem }: Props) => {
  const buttons = [
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Карнітин',
    'Все',
    'Протеїнові коктейлі',
  ];

  return (
    <ul className="buttons-list">
      {buttons.map((button, ind) => (
        <li key={ind}>
          <button className="buttons-list__btn" onClick={() => filterItem(button)}>
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
});

export default ButtonsList;
