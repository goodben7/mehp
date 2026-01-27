export interface Photo {
  id: string;
  src: string;
  caption?: string;
  date?: string;
}

export const photos: Photo[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600',
    caption: 'Cinque Terre, Italie',
    date: 'Été 2023'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=600',
    caption: 'Notre première soirée',
    date: 'Octobre 2022'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&q=80&w=600',
    caption: 'Juste toi ✨',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=600',
    caption: 'Sourire radieux',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?auto=format&fit=crop&q=80&w=600',
    caption: 'Paris ❤️',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1520052203542-d3095f126cf4?auto=format&fit=crop&q=80&w=600',
    caption: 'Vers l\'infini',
  }
];
