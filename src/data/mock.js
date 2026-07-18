export const pages = [
  { id: 'equipment', label: 'Аппаратура' },
  { id: 'people', label: 'Люди' },
  { id: 'space', label: 'Пространство' },
  { id: 'profile', label: 'Профиль' },
]

export const spaces = [
  {
    title: 'Коворкинг ИРНИТУ',
    image: new URL('../assets/4f392dd72f616d6efee97b94b72b0b092f940f87.png', import.meta.url).href,
  },
  {
    title: 'Переговорная ИРНИТУ',
    image: new URL('../assets/54734fcdfbe9f5084d82e6651ca76ed10d79bbfd.png', import.meta.url).href,
  },
]

const photographerIvan = {
  name: 'Иван Иванов',
  role: 'Фотограф',
  description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опыт.',
  image: new URL('../assets/fd8a46f8e7605d91e05bd743f786d96b6e0de388.png', import.meta.url).href,
}

const photographerAnastasia = {
  name: 'Анастасия Ремогузина',
  role: 'Фотограф',
  description: 'Портретная и репортажная съёмка, обработка фотографий и постановка света.',
  image: new URL('../assets/f5a0a6cf1607e3ade0da1417afc6f84648b611a5.png', import.meta.url).href,
}

const operatorElena = {
  name: 'Елена Иванова',
  role: 'Оператор',
  description: 'Видеооператор для мероприятий, интервью и учебных проектов с мобильным комплектом света.',
  image: new URL('../assets/f5a0a6cf1607e3ade0da1417afc6f84648b611a5.png', import.meta.url).href,
}

const engineerSergey = {
  name: 'Сергей Петров',
  role: 'Техник',
  description: 'Настройка аппаратуры, проверка микрофонов, камер и презентационного оборудования.',
  image: new URL('../assets/fd8a46f8e7605d91e05bd743f786d96b6e0de388.png', import.meta.url).href,
}

export const people = [
  photographerIvan,
  photographerAnastasia,
  operatorElena,
  engineerSergey,
  { ...photographerIvan },
  { ...photographerAnastasia },
  { ...operatorElena },
  { ...engineerSergey },
]

export const slots = [
  '08.00 - 09.00',
  '09.00 - 10.00',
  '10.00 - 11.00',
  '11.00 - 12.00',
  '12.00 - 13.00',
  '13.00 - 14.00',
  '14.00 - 15.00',
  '15.00 - 16.00',
  '16.00 - 17.00',
  '17.00 - 18.00',
  '18.00 - 19.00',
  '19.00 - 20.00',
]

export const reservedSlots = ['10.00 - 11.00', '11.00 - 12.00', '13.00 - 14.00']

export const responsiblePeople = ['Иван Иванов', 'Елена Иванова']

export const eventOptions = ['Съёмки в первомайском', 'Рабочая встреча', 'Обзор пространства']

export const invites = [
  {
    title: 'Съёмки в первомайском',
    time: '10.00 - 12.00',
    person: 'Иванов И. В.',
    role: 'Фотограф',
  },
  {
    title: 'Съёмки в первомайском',
    time: '10.00 - 12.00',
    person: 'Иванов И. В.',
    role: 'Фотограф',
  },
]
