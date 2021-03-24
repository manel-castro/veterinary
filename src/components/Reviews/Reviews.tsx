import React, { useState, useEffect, memo } from 'react';
import './Reviews.css';

const _items = [
  {
    player: {
      title: '1 Efren Reyes',
      desc:
        'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
    },
    pos: 0,
    id: '124ab',
  },
  {
    player: {
      title: "2 Ronnie O'Sullivan",
      desc:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
    },
    pos: 1,
    id: '124ab2',
  },
  {
    player: {
      title: '3 Shane Van Boening',
      desc:
        'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
    },
    pos: 2,
    id: '12234ab',
  },
  {
    player: {
      title: '4 Mike Sigel',
      desc:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
    },
    pos: 3,
    id: '1224ab',
  },
  {
    player: {
      title: '5 Willie Mosconi',
      desc:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
    },
    pos: 4,
    id: '124ab1',
  },
];

// type Item = {
//   pos: number;
//   id: string;
//   player: {
//     title: string;
//     desc: string;
//     image: string;
//   };
// };

// export interface Props {
//   items: Array<Item>;
//   activeId: String;
// }

// export interface ListItemProps {
//   item: Item;
//   activeId: String;
// }

// const areEqual = (prevProps: ListItemProps, nextProps: ListItemProps) => {
//   if (prevProps.item === nextProps.item) return true;
//   return false;
// };

// const ListItem: React.FC<ListItemProps> = memo((props: ListItemProps) => {
//   let order = props.item.pos;
//   useEffect(() => console.log('itemRendered'));
//   if (props.activeId === props.item.id) {
//     order = 7;
//   }
//   return (
//     <li
//       key={`${props.item.pos}`}
//       style={{ padding: '70px', order: order, transition: 'all 1s ease' }}
//     >
//       {props.item.player.title}
//     </li>
//   );
// }, areEqual);

// const List: React.FC<Props> = (props: Props) => {
//   useEffect(() => console.log('list rerendered'));
//   return (
//     <ul style={{ display: 'flex', margin: '100px', transition: 'all 1s ease' }}>
//       {props.items.map((item: Item) => (
//         <ListItem item={item} activeId={props.activeId} />
//       ))}
//     </ul>
//   );
// };

// const Carousel = () => {
//   const [items, setItems] = useState<Item[]>(
//     _items,
//     // .map((item: Item, pos: number) => {
//     //   const newItem = item;
//     //   newItem.pos = pos;
//     //   return newItem;
//     // }),
//   );
//   const [activeId, setActiveId] = useState<String>('');

//   useEffect(() => {
//     console.log('container rendered');
//   });

//   const handleClick = (e: any) => {
//     e.preventDefault();
//     setActiveId('1224ab');

//     // const itemsLength = items.length;
//     // console.log('Items length', itemsLength);
//     // const newList = items.map((item: any, key: number) => {
//     //   const newItem = item;

//     //   newItem.pos = item.pos < itemsLength - 1 ? newItem.pos + 1 : 0;

//     //   return newItem;
//     // });
//     // newList.sort((a, b) => (a.pos > b.pos ? 1 : -1));
//     // setItems(newList);
//     // console.log('List after click: ', items);
//   };
//   // console.log(items);

//   // const changeRandom = () => {
//   //   const index = Math.floor(Math.random() * items.length);
//   //   const newList = items.slice();
//   //   newList[index] = Math.floor(Math.random() * 10).toString();

//   //   this.setState({
//   //     listItems: newList,
//   //   });
//   // };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <List items={items} activeId={activeId} />
//       <button onClick={(e) => handleClick(e)}>Click me</button>
//     </div>
//   );
// };

// export default Carousel;

const Carousel = () => {
  useEffect(() => {
    setInterval(changeOrder, 3000);
  });
  const [items, setItems] = useState(_items);

  function changeOrder() {
    const allSlides = document.querySelectorAll('.single-slide');
    const refPoint = '1';
    const slidesLength = allSlides.length;

    for (const slide of allSlides) {
      const orderStr = slide.getAttribute('data-order')!;

      const order = parseInt(orderStr!);

      console.log('orderItem: ', order);
      if (order < slidesLength) {
        slide.setAttribute('data-order', `${order + 1}`);
      } else {
        slide.setAttribute('data-order', `${1}`);
      }
    }
  }

  return (
    <div className="all-slides">
      <div className="single-slide" data-order="1">
        <h3>First slide </h3>
        <p>Some text</p>
      </div>
      <div className="single-slide" data-order="2">
        <h3>Second slide</h3>
        <p>Some other text</p>
      </div>
      <div className="single-slide" data-order="3">
        <h3>Third slide</h3>
        <p>Yet some other text</p>
      </div>
      <div className="single-slide" data-order="4">
        <h3>Third slide4</h3>
        <p>Yet some other text</p>
      </div>
      <div className="single-slide" data-order="5">
        <h3>Third slide5</h3>
        <p>Yet some other text</p>
      </div>
    </div>
  );
};

export default Carousel;
