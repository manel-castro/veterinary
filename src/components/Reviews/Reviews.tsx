import React, { useState, useEffect } from 'react';

const _items = [
  {
    player: {
      title: 'Efren Reyes',
      desc:
        'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      desc:
        'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
    },
  },
  {
    player: {
      title: 'Mike Sigel',
      desc:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
    },
  },
  {
    player: {
      title: 'Willie Mosconi',
      desc:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
    },
  },
];

interface Item {
  pos?: number;
  player: {
    title: string;
    desc: string;
    image: string;
  };
}

const List = ({ list }: { list: Item[] }) => {
  useEffect(() => console.log('list rerendered'));
  return (
    <ul style={{ margin: '100px' }}>
      {list.map((item: Item, key: number) => (
        <li key={`${key}`} style={{ padding: '70px' }}>
          {item.player.title}
        </li>
      ))}
    </ul>
  );
};

const Carousel = () => {
  const [items, setItems] = useState<Item[]>(_items);

  const handleClick = (e: any) => {
    e.preventDefault();
    setItems((prev) => items.reverse());
  };
  console.log(items);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <List list={items} />
      <button onClick={(e) => handleClick(e)}>Click me</button>
    </div>
  );
};

export default Carousel;
