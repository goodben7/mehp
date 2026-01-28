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
    caption: "Je t'aime",
    date: 'Pour toujours et à jamais'
  },
  {
    id: '2',
    src: img2,
    caption: "Je t'aime",
    date: 'Tant que je serai là, tu ne seras jamais seule.'
  },
  {
    id: '3',
    src: img3,
    caption: 'Juste toi ✨',
    date: 'Tu es incroyable'
  },
  {
    id: '4',
    src: img4,
    caption: "Je t'aime à l'infini",
    date: "Mon être humain préféré"
  },
  {
    id: '5',
    src: img5,
    caption: 'Sourire radieux',
    date: "Tu illumines ma vie"
  },
  {
    id: '6',
    src: img6,
    caption: "Je t'aime infiniment",
    date: 'Pour toujours et à jamais'
  }
];
