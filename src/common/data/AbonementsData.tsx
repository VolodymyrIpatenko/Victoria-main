import Abonements from '../../entities/Abonements';

const AbonementsList: Abonements[] = [
  {
    duration: '1 місяць безліміт',
    price: '900',
    expires: 'Термін дії абонемента 30 днів',
    action: 'Записатися',
  },
  {
    duration: '3 місяці безліміт',
    price: '2500',
    expires: 'Термін дії абонемента 90 днів',
    action: 'Записатися',
  },
  {
    duration: '6 місяців безліміт',
    price: '4200',
    expires: 'Термін дії абонемента 180 днів',
    action: 'Записатися',
  },
  {
    duration: '12 місяців безліміт',
    price: '8000',
    expires: 'Термін дії абонемента 360 днів',
    action: 'Записатися',
  },
  {
    duration: 'Разове тренування',
    price: '120',
    action: 'Записатися',
  },
];

export default AbonementsList;
