export interface ArtClass {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  ageGroups: ('kids' | 'teens' | 'adults')[];
  level: string;
  duration: string;
  image: string;
  skills: string[];
  projects: string[];
  faqs: { question: string; answer: string }[];
}

export const classes: ArtClass[] = [
  {
    id: '1',
    slug: 'drawing',
    name: 'Drawing & Sketching',
    shortDescription: 'Develop observation, proportions, shading, and creative expression through pencil and charcoal.',
    fullDescription: 'Our drawing and sketching program is designed to develop your eye for detail and your hand for expression. Starting with fundamental observation techniques, you will learn to see the world like an artist — understanding proportions, perspective, light, and shadow. Through guided practice and creative exercises, you will build confidence in translating what you see and imagine onto paper.',
    ageGroups: ['kids', 'teens', 'adults'],
    level: 'Beginner to Advanced',
    duration: '[Class Schedule]',
    image: '/drawing.jpg',
    skills: ['Observation & Proportion', 'Line & Contour Drawing', 'Shading & Tonal Value', 'Perspective & Depth', 'Pencil & Charcoal Techniques', 'Composition & Layout'],
    projects: ['Still Life Studies', 'Landscape Sketches', 'Portrait Drawing', 'Nature Illustration', 'Personal Sketchbook Projects'],
    faqs: [
      { question: 'Do I need any prior drawing experience?', answer: 'No. Our classes are designed for all levels, from complete beginners to those looking to refine their existing skills.' },
      { question: 'What materials do I need to bring?', answer: 'All basic materials including pencils, charcoal, and sketchbooks are provided. You are welcome to bring your own preferred materials as well.' },
      { question: 'How are classes structured?', answer: 'Each session combines guided instruction with hands-on practice. You will work on progressive exercises that build skills over time.' }
    ]
  },
  {
    id: '2',
    slug: 'painting',
    name: 'Painting',
    shortDescription: 'Explore color, texture, and expression through acrylic, watercolor, and mixed media.',
    fullDescription: 'Painting is where color comes alive. Our painting classes explore color theory, brushwork, texture creation, and artistic expression through various painting mediums. Whether you are drawn to the transparency of watercolors, the versatility of acrylics, or the richness of mixed media, this program helps you develop a personal painting style while mastering foundational techniques.',
    ageGroups: ['kids', 'teens', 'adults'],
    level: 'Beginner to Advanced',
    duration: '[Class Schedule]',
    image: '/painting.jpg',
    skills: ['Color Theory & Mixing', 'Brush Techniques', 'Texture Creation', 'Acrylic Painting', 'Watercolor Methods', 'Mixed Media Approaches'],
    projects: ['Color Studies & Swatches', 'Landscape Paintings', 'Abstract Compositions', 'Still Life in Color', 'Personal Art Series'],
    faqs: [
      { question: 'What painting mediums are covered?', answer: 'We teach acrylic, watercolor, and mixed media techniques, allowing you to explore and find your preferred medium.' },
      { question: 'Are painting materials provided?', answer: 'Yes, canvases, paints, brushes, and other essential materials are provided as part of the course.' },
      { question: 'Can I bring my own materials?', answer: 'Absolutely. Many students prefer to use their own materials, and you are welcome to do so.' }
    ]
  },
  {
    id: '3',
    slug: 'calligraphy',
    name: 'Calligraphy',
    shortDescription: 'Transform letters into art through traditional and modern lettering techniques.',
    fullDescription: 'Calligraphy is the ancient art of beautiful writing. In our calligraphy classes, you will explore letterforms, stroke techniques, composition, and both traditional and contemporary styles. From brush pen to cut nib, from Devanagari to Copperplate, discover the meditative and rewarding practice of turning letters into works of art.',
    ageGroups: ['kids', 'teens', 'adults'],
    level: 'Beginner to Advanced',
    duration: '[Class Schedule]',
    image: '/calligraphy.jpg',
    skills: ['Letterform Construction', 'Stroke Technique & Pressure', 'Brush Pen Calligraphy', 'Cut Nib Lettering', 'Composition & Layout', 'Traditional & Modern Styles'],
    projects: ['Alphabet Drills', 'Quote Compositions', 'Envelope Design', 'Personalized Lettering Art', 'Custom Typography Pieces'],
    faqs: [
      { question: 'Which calligraphy styles do you teach?', answer: 'We offer brush pen, cut nib, Devanagari, and Copperplate calligraphy, covering both traditional and modern approaches.' },
      { question: 'Is calligraphy suitable for children?', answer: 'Yes. We have age-appropriate programs designed to make lettering fun and accessible for young learners.' },
      { question: 'What tools are provided?', answer: 'Basic calligraphy tools including pens, nibs, ink, and practice sheets are provided.' }
    ]
  },
  {
    id: '4',
    slug: 'handwriting',
    name: 'Handwriting Improvement Course',
    shortDescription: 'Better Handwriting. Better Confidence. Better Presentation — neat, clear and consistent handwriting for children.',
    fullDescription: 'The Handwriting Improvement Course at Tvastra is a structured program designed to help children develop neat, clear and consistent handwriting through guided practice and easy-to-follow techniques. The course focuses on improving letter formation, size and proportion, spacing between letters and words, alignment, writing patterns, speed and overall presentation. Students also work on developing the correct writing habits that can make everyday schoolwork more organised and legible. With regular practice and individual guidance, the course aims to help students become more comfortable and confident with their handwriting.',
    ageGroups: ['kids'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/handwriting.jpg',
    skills: ['Correct letter formation and writing patterns', 'Proper spacing between letters and words', 'Consistent letter size and proportion', 'Better alignment and presentation', 'Improved writing flow and speed', 'Guided handwriting practice', 'Techniques for neat and legible writing', 'Developing better everyday writing habits'],
    projects: ['Guided Handwriting Practice Sheets', 'Letter Formation Drills', 'Spacing & Alignment Exercises', 'Speed & Flow Practice', 'Before & After Comparisons'],
    faqs: [
      { question: 'Can handwriting really improve at any age?', answer: 'Yes. With proper technique and consistent practice, anyone can significantly improve their handwriting regardless of age.' },
      { question: 'Do you teach both cursive and print?', answer: 'Yes, we teach both cursive and print handwriting styles, tailored to your goals.' },
      { question: 'How long does it take to see improvement?', answer: 'Most students notice visible improvement within the first few weeks of consistent practice.' }
    ]
  },
  {
    id: '5',
    slug: 'traditional-art',
    name: 'Traditional Art',
    shortDescription: 'Discover cultural art forms, heritage techniques, and timeless artistic traditions.',
    fullDescription: 'India has an incredibly rich tradition of art forms passed down through generations. Our traditional art classes introduce you to these cultural treasures — from the intricate patterns of Madhubani and Warli to the symbolic beauty of Gond and Lippan art. Learn not just techniques, but the stories, meanings, and cultural contexts that make these art forms timeless.',
    ageGroups: ['kids', 'teens', 'adults'],
    level: 'Beginner to Advanced',
    duration: '[Class Schedule]',
    image: '/traditional.jpeg',
    skills: ['Cultural Art Forms', 'Traditional Patterns', 'Symbolic Motifs', 'Heritage Techniques', 'Natural Pigments', 'Cultural Context & History'],
    projects: ['Traditional Motif Studies', 'Cultural Pattern Art', 'Heritage-inspired Wall Art', 'Festival-themed Projects', 'Personal Heritage Series'],
    faqs: [
      { question: 'Which traditional art forms are covered?', answer: 'We teach various Indian traditional art forms including Madhubani, Warli, Mandala, and other cultural art traditions.' },
      { question: 'Do I need to know the history?', answer: 'No prior knowledge is required. We teach both the techniques and cultural significance from the ground up.' },
      { question: 'Are these classes suitable for children?', answer: 'Yes. Traditional art is a wonderful way for children to connect with cultural heritage while developing artistic skills.' }
    ]
  },
  {
    id: '6',
    slug: 'modern-art',
    name: 'Contemporary Art',
    shortDescription: 'Experiment with abstract expression, mixed media, and contemporary creative techniques.',
    fullDescription: 'Contemporary art is about pushing boundaries and exploring new forms of expression. Our contemporary art classes encourage experimentation with abstract concepts, mixed media, fluid art, resin techniques, and other modern approaches. Discover how contemporary artists think, create, and express ideas through innovative artistic methods.',
    ageGroups: ['teens', 'adults'],
    level: 'Intermediate to Advanced',
    duration: '[Class Schedule]',
    image: '/contemporaray.jpg',
    skills: ['Abstract Expression', 'Mixed Media Techniques', 'Fluid & Resin Art', 'Contemporary Concepts', 'Experimental Approaches', 'Personal Artistic Voice'],
    projects: ['Abstract Series', 'Mixed Media Collages', 'Fluid Art Canvases', 'Resin Art Projects', 'Personal Art Portfolio'],
    faqs: [
      { question: 'What modern techniques are explored?', answer: 'We cover abstract art, mixed media, fluid art, resin art, and various contemporary experimental approaches.' },
      { question: 'Is this suitable for beginners?', answer: 'We recommend some foundational art experience for our modern art program, though beginners with strong interest are welcome.' },
      { question: 'What materials are used?', answer: 'A diverse range of materials including acrylics, resins, inks, found objects, and mixed media supplies.' }
    ]
  }
];
