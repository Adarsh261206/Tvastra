export type GalleryCategory = 'traditional-art' | 'modern-art';

export interface GalleryItem {
  id: string;
  title: string;
  category?: GalleryCategory;
  studentName: string;
  description: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const galleryCategories: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'traditional-art', label: 'Traditional Art' },
  { id: 'modern-art', label: 'Contemporary Art' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Student Artwork 1',
    studentName: '[Student Name]',
    description: 'Creative artwork by our talented student.',
    image: '/image1.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g2',
    title: 'Student Artwork 2',
    studentName: '[Student Name]',
    description: 'Creative artwork by our talented student.',
    image: '/image2.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g3',
    title: 'Student Artwork 3',
    studentName: '[Student Name]',
    description: 'Creative artwork by our talented student.',
    image: '/image3.jpeg',
    aspect: 'portrait',
  },
  {
    id: 'g4',
    title: 'Student Artwork 4',
    studentName: '[Student Name]',
    description: 'Creative artwork by our talented student.',
    image: '/image4.jpeg',
    aspect: 'portrait',
  },
  {
    id: 'g5',
    title: 'Student Artwork 5',
    studentName: '[Student Name]',
    description: 'Creative artwork by our talented student.',
    image: '/image5.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g6',
    title: 'Student Artwork 6',
    studentName: '[Student Name]',
    description: 'Creative artwork by our talented student.',
    image: '/image6.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g7',
    title: 'Traditional Art',
    category: 'traditional-art',
    studentName: '[Student Name]',
    description: 'Traditional art artwork by our talented student.',
    image: '/traditional.jpeg',
    aspect: 'portrait',
  },
  {
    id: 'g8',
    title: 'Contemporary Art',
    category: 'modern-art',
    studentName: '[Student Name]',
    description: 'Contemporary art artwork by our talented student.',
    image: '/contemporaray.jpg',
    aspect: 'landscape',
  },
];
