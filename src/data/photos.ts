import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';

export interface Photo {
  id: string;
  src: string;
  caption?: string;
  date?: string;
}

export const photos: Photo[] = [
  {
    id: '1',
    src: img1,
    caption: 'Cinque Terre, Italie',
    date: 'Été 2023'
  },
  {
    id: '2',
    src: img2,
    caption: 'Notre première soirée',
    date: 'Octobre 2022'
  },
  {
    id: '3',
    src: img3,
    caption: 'Juste toi ✨',
  },
  {
    id: '4',
    src: img4,
    caption: 'Sourire radieux',
  },
  {
    id: '5',
    src: img5,
    caption: 'Paris ❤️',
  },
  {
    id: '6',
    src: img6,
    caption: 'Vers l\'infini',
  }
];
