import React, { useState, useEffect, memo } from 'react';

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

type Item = {
  pos?: number;
  player: {
    title: string;
    desc: string;
    image: string;
  };
};

export interface Props {
  items: Array<Item>;
}

const List: React.FC<Props> = (props: Props) => {
  useEffect(() => console.log('list rerendered'));
  return (
    <ul style={{ margin: '100px' }}>
      {props.items.map((item: Item, key: number) => (
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
    setItems((prev) => {
      return prev.map((item: any, key: number) => {
        if (key === 2) {
          console.log(item.player.title);
          let newItem = item;
          newItem.player.title = 'SOMETHING CHANGED';
          return newItem;
        } else {
          return item;
        }
      });
    });
  };
  console.log(items);
  useEffect(() => {
    console.log('container rendered');
  });

  // const changeRandom = () => {
  //   const index = Math.floor(Math.random() * items.length);
  //   const newList = items.slice();
  //   newList[index] = Math.floor(Math.random() * 10).toString();

  //   this.setState({
  //     listItems: newList,
  //   });
  // };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <List items={items} />
      <button onClick={(e) => handleClick(e)}>Click me</button>
    </div>
  );
};

export default Carousel;
