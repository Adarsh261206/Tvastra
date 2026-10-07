export interface Program {
  id: string;
  ageGroup: 'kids' | 'teens' | 'adults';
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  artForms: string[];
  activities: string[];
  image: string;
}

export const programs: Program[] = [
  {
    id: 'kids',
    ageGroup: 'kids',
    title: 'For Kids',
    subtitle: 'Ages 5-12',
    description: 'Young minds thrive when given the freedom to explore. Our kids programs focus on building creativity, confidence, and a genuine love for art through fun, hands-on activities that feel more like play than learning.',
    focusAreas: ['Creative Exploration', 'Imagination Building', 'Basic Art Skills', 'Color & Shape Discovery', 'Confidence Through Creation'],
    artForms: ['Drawing', 'Painting', 'Crafts', 'Coloring', 'Creative Projects'],
    activities: ['Guided Art Sessions', 'Free Drawing Time', 'Color Exploration', 'Craft Activities', 'Art & Story Combos'],
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'teens',
    ageGroup: 'teens',
    title: 'For Teens',
    subtitle: 'Ages 13-17',
    description: 'This is the age where artistic identity begins to form. Our teen programs focus on developing real skills, exploring different art forms, building a creative portfolio, and finding your unique artistic voice.',
    focusAreas: ['Skill Development', 'Artistic Techniques', 'Portfolio Building', 'Creative Experimentation', 'Finding Your Style'],
    artForms: ['Sketching', 'Painting', 'Calligraphy', 'Modern Art', 'Mixed Media'],
    activities: ['Technique Workshops', 'Personal Projects', 'Portfolio Development', 'Art Challenges', 'Group Critiques'],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'adults',
    ageGroup: 'adults',
    title: 'For Adults',
    subtitle: 'Ages 18+',
    description: 'It is never too late to discover your creative side. Our adult programs offer a welcoming, pressure-free environment to explore art, develop new skills, and find joy in the creative process.',
    focusAreas: ['Hobby & Leisure', 'Creative Expression', 'Skill Development', 'Stress Relief', 'Social Connection'],
    artForms: ['Calligraphy', 'Painting', 'Drawing', 'Modern Art', 'Traditional Art'],
    activities: ['Guided Art Sessions', 'Skill Workshops', 'Personal Projects', 'Group Activities', 'Studio Sessions'],
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&h=400&q=80'
  }
];
