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
  },
  {
    id: '7',
    slug: 'kids-beginners',
    name: 'Kids Art Program - Beginners Level 1 & 2',
    shortDescription: 'Creative foundation in drawing and colouring for ages 4–7 — shapes, colours, patterns and imaginative artwork.',
    fullDescription: 'A creative foundation program specially designed for young children taking their first steps into the world of art. Through fun and age-appropriate drawing and colouring activities, children learn basic shapes, lines, patterns, colours and simple compositions. The course gradually develops their hand control, observation and ability to express their own ideas visually. Level 1 introduces the basic building blocks of drawing and colouring, while Level 2 gradually moves children towards more detailed compositions and independent creative work.',
    ageGroups: ['kids'],
    level: 'Beginner',
    duration: '[Class Schedule]',
    image: '/Kids Art Program – Beginners Level 1 & 2.png',
    skills: ['Basic Lines and Shapes', 'Simple Object Drawing', 'Colour Recognition and Combinations', 'Crayon and Colouring Techniques', 'Basic Composition', 'Pattern and Texture Activities', 'Creative Drawing', 'Imagination-Based Artwork', 'Fine Motor and Hand-Eye Coordination'],
    projects: ['Shape and Pattern Art', 'My First Object Drawings', 'Colour Exploration Sheets', 'Imagination Artwork'],
    faqs: [
      { question: 'What age is this program for?', answer: 'This program is designed for children aged 4–7 years, with activities suited to young beginners.' },
      { question: 'Does my child need prior experience?', answer: 'No. Level 1 starts from the very basics of lines, shapes and colours.' },
      { question: 'How does Level 2 differ from Level 1?', answer: 'Level 2 moves towards more detailed compositions and independent creative work.' }
    ]
  },
  {
    id: '8',
    slug: 'kids-advanced',
    name: 'Kids Art Program - Advanced Level 1 & 2',
    shortDescription: 'Stronger drawing, shading, perspective and creative skills for ages 8–12 through structured projects.',
    fullDescription: 'Our Advanced Kids Art Program is designed for children who are ready to move beyond basic drawing and develop stronger artistic skills. Students learn drawing, composition, colouring, shading, perspective and creative interpretation through structured projects. The focus is not only on completing beautiful artwork but also on understanding how an artwork is planned and created. The Level 1 and Level 2 format allows students to progress systematically from intermediate concepts towards more confident and detailed artwork.',
    ageGroups: ['kids'],
    level: 'Intermediate',
    duration: '[Class Schedule]',
    image: '/Kids Art Program – Advanced Level 1 & 2.png',
    skills: ['Advanced Drawing Techniques', 'Object and Nature Drawing', 'Composition', 'Proportion and Placement', 'Shading and Tonal Values', 'Colour Theory and Combinations', 'Perspective Basics', 'Creative and Imaginative Drawing', 'Colouring and Painting Techniques', 'Independent Artwork Development'],
    projects: ['Nature and Object Studies', 'Shading and Tone Sheets', 'Perspective Drawings', 'Independent Artwork'],
    faqs: [
      { question: 'What age is this program for?', answer: 'This program is designed for children aged 8–12 years.' },
      { question: 'Should my child complete Beginners first?', answer: 'Beginners foundations help, but children with basic drawing comfort can join directly — contact us to discuss the right level.' },
      { question: 'What will my child create?', answer: 'Structured projects covering drawing, shading, perspective and creative interpretation, planned from start to finish.' }
    ]
  },
  {
    id: '9',
    slug: 'kids-watercolour-poster',
    name: 'Kids Watercolour & Poster Colour Painting Level 1 & 2',
    shortDescription: 'Watercolours and poster colours for ages 8–12 — materials, colour mixing, washes and complete paintings.',
    fullDescription: 'This structured painting course introduces children to two versatile mediums — watercolours and poster colours. Children first understand their materials, brushes, colour mixing and application techniques before progressing towards complete paintings. Level 1 builds the foundation, while Level 2 introduces more detailed paintings and encourages children to develop their individual painting style.',
    ageGroups: ['kids'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/Kids Watercolour & Poster Colour Painting – Level 1 & 2.png',
    skills: ['Introduction to Watercolour and Poster Colours', 'Understanding Brushes and Art Materials', 'Colour Wheel and Colour Mixing', 'Primary, Secondary and Complementary Colours', 'Water Control in Watercolour', 'Flat Wash and Graded Wash', 'Wet-on-Wet and Wet-on-Dry Techniques', 'Layering and Blending', 'Poster Colour Application', 'Textures and Effects', 'Landscape, Nature and Object Paintings', 'Composition and Finishing'],
    projects: ['Colour Wheel Charts', 'Wash Technique Sheets', 'Nature Paintings', 'Poster Colour Compositions'],
    faqs: [
      { question: 'What age is this course for?', answer: 'This course is designed for children aged 8–12 years.' },
      { question: 'Are materials provided?', answer: 'Basic painting materials are provided; contact us for the full material list.' },
      { question: 'How do Level 1 and Level 2 differ?', answer: 'Level 1 builds material and technique foundations; Level 2 moves to detailed paintings and personal style.' }
    ]
  },
  {
    id: '10',
    slug: 'kids-canvas',
    name: 'Kids Canvas Painting Course',
    shortDescription: 'Real canvas painting for ages 8+ — children create and take home three completed canvas artworks.',
    fullDescription: 'Give your child the experience of creating their own artwork on a real canvas. Our Kids Canvas Painting Course takes students through the complete process of creating a canvas painting — from understanding materials and brush techniques to composition, layering, detailing and finishing. During the course, children work on three different canvas paintings, helping them explore different subjects and painting styles. The program encourages children to understand the painting process instead of simply copying a finished artwork. At the end of the course, every child takes home their three completed canvas artworks.',
    ageGroups: ['kids'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/Kids Canvas Painting Course.png',
    skills: ['Canvas and Painting Materials', 'Brush Handling Techniques', 'Flat Brush Techniques', 'Colour Mixing', 'Background Creation', 'Blending and Layering', 'Composition', 'Landscape Painting', 'Abstract Painting', 'Living Beings and Creative Art', 'Detailing and Finishing'],
    projects: ['Landscape on Canvas', 'Abstract Canvas Art', 'Creative Canvas Painting'],
    faqs: [
      { question: 'What age is this course for?', answer: 'This course is designed for children aged 8 years and above.' },
      { question: 'How many paintings will my child complete?', answer: 'Three different canvas paintings across subjects and styles, all taken home at the end.' },
      { question: 'Does my child need painting experience?', answer: 'Basic comfort with colours helps, but material and brush basics are taught from the start.' }
    ]
  },
  {
    id: '11',
    slug: 'kids-memory-drawing',
    name: 'Memory Drawing - Human Figures Level 1 & 2',
    shortDescription: 'Draw people and everyday scenes from memory for ages 7+ — figures, postures, expressions and compositions.',
    fullDescription: 'Memory drawing teaches children to transform their observations, memories and imagination into meaningful compositions. Our Human Figure Memory Drawing program focuses on helping children understand how to draw people correctly and use human figures confidently while creating scenes from everyday life. Level 1 develops the basic understanding of human figures, while Level 2 focuses on movement, multiple figures and complete memory-drawing compositions. This course can also provide a useful foundation for students developing observational and composition skills for school-level drawing and art examinations.',
    ageGroups: ['kids'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/Memory Drawing – Human Figures Level 1 & 2.png',
    skills: ['Basic Human Figure Construction', 'Body Proportions', 'Male and Female Figures', 'Children and Adult Figures', 'Body Postures', 'Sitting, Standing, Walking and Running Figures', 'Facial Expressions and Gestures', 'Figures in Activities', 'Multiple Figure Placement', 'Background and Surroundings', 'Complete Scene Creation', 'Story-Based Compositions'],
    projects: ['Figure Practice Sheets', 'Posture Studies', 'Everyday Scene Compositions', 'Story-Based Artwork'],
    faqs: [
      { question: 'What age is this course for?', answer: 'This course is designed for children aged 7 years and above.' },
      { question: 'Will this help with school drawing exams?', answer: 'Yes — it builds observation, figure drawing and composition skills useful for school-level art examinations.' },
      { question: 'How do Level 1 and Level 2 differ?', answer: 'Level 1 covers figure basics; Level 2 focuses on movement, multiple figures and complete compositions.' }
    ]
  },
  {
    id: '12',
    slug: 'elementary-exam-prep',
    name: 'Elementary Drawing Grade Exam Preparation',
    shortDescription: 'Structured 5–6 month preparation for the Elementary Drawing Grade Examination, ages 12+.',
    fullDescription: 'Our Elementary Drawing Grade Exam Preparation Course is a structured program designed for students preparing for the Elementary Drawing Grade Examination. The course provides regular practice and guidance across the drawing and art skills required for examination preparation. Students learn how to observe, plan and complete their work within the required format and gradually develop confidence through guided practice. As the examination approaches, students receive additional practice to help improve accuracy, speed, presentation and confidence.',
    ageGroups: ['kids', 'teens'],
    level: 'Intermediate',
    duration: '5–6 Months',
    image: '/Elementary Drawing Grade Exam Preparation.png',
    skills: ['Object Drawing', 'Memory Drawing', 'Design and Composition', 'Geometry-Related Drawing', 'Lettering and Presentation', 'Colour Application', 'Human Figures and Proportions', 'Observation and Placement', 'Composition Planning', 'Time Management', 'Practice Assignments', 'Exam-Oriented Practice'],
    projects: ['Object Drawing Sheets', 'Memory Drawing Compositions', 'Design Plates', 'Timed Practice Papers'],
    faqs: [
      { question: 'What age is this course for?', answer: 'This program is suitable for students aged 12 years and above.' },
      { question: 'How long is the course?', answer: 'Approximately 5–6 months of structured preparation.' },
      { question: 'Who should join?', answer: 'Students preparing for the Elementary Drawing Grade Examination and those strengthening their drawing foundation.' }
    ]
  },
  {
    id: '13',
    slug: 'intermediate-exam-prep',
    name: 'Intermediate Drawing Grade Exam Preparation',
    shortDescription: 'Advanced 5–6 month preparation for the Intermediate Drawing Grade Examination, ages 12+.',
    fullDescription: 'The Intermediate Drawing Grade Exam Preparation Course is designed for students who are ready to develop more advanced drawing, observation and composition skills while preparing systematically for the Intermediate Drawing Grade Examination. Students receive structured guidance and regular practice across the required areas, with emphasis on greater accuracy, proportion, detailing and independent execution. Students are encouraged to work independently as their skills progress, helping them become more confident in planning and completing examination artwork.',
    ageGroups: ['kids', 'teens'],
    level: 'Advanced',
    duration: '5–6 Months',
    image: '/Intermediate Drawing Grade Exam Preparation.png',
    skills: ['Advanced Object Drawing', 'Memory Drawing and Composition', 'Human Figures and Activities', 'Design and Creative Composition', 'Geometry-Related Drawing', 'Lettering and Presentation', 'Colour Application and Harmony', 'Perspective and Proportion', 'Observation Techniques', 'Detailed Drawing and Finishing', 'Time-Bound Practice', 'Practice Papers'],
    projects: ['Advanced Object Studies', 'Figure Composition Sheets', 'Design Plates', 'Timed Practice Papers'],
    faqs: [
      { question: 'What age is this course for?', answer: 'This program is suitable for students aged 12 years and above.' },
      { question: 'Should my child complete Elementary first?', answer: 'Elementary preparation provides a strong base, but ready students can discuss direct entry with us.' },
      { question: 'How long is the course?', answer: 'Approximately 5–6 months of systematic preparation.' }
    ]
  },
  {
    id: '14',
    slug: 'teens-pencil-shading',
    name: 'Pencil Shading & Sketching for Beginners Level 1 & 2',
    shortDescription: 'Depth, dimension and realism with pencils for ages 8+ — from tonal scales to detailed sketching.',
    fullDescription: 'Our Pencil Shading and Sketching Course introduces students to the art of creating depth, dimension, texture and realistic forms using pencils. Beginning with fundamental pencil techniques, students gradually learn how light and shadow transform a simple outline into a three-dimensional drawing. Level 1 builds foundations — pencils, pressure, strokes, values and basic forms. Level 2 develops sketching skills — realistic textures, proportion, light studies, still life, nature, fabric, perspective, facial features and composition. Perfect for beginners who love drawing and want stronger sketching skills before portraits, charcoal or specialised art forms.',
    ageGroups: ['kids', 'teens'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/Pencil Shading & Sketching for Beginners – Level 1 & 2.png',
    skills: ['Sketching Pencil Grades', 'Pencil Pressure and Control', 'Basic Strokes', 'Light and Dark Values', 'Tonal Scales', 'Hatching and Cross-Hatching', 'Blending', 'Highlights and Shadows', 'Still-Life Sketching', 'Textures and Fabric', 'Perspective Basics', 'Composition and Finishing'],
    projects: ['Tonal Scale Sheets', 'Shaded Basic Forms', 'Still-Life Sketches', 'Nature and Texture Studies'],
    faqs: [
      { question: 'What age is this course for?', answer: 'This course is suitable for ages 8 years and above, including teens.' },
      { question: 'How do Level 1 and Level 2 differ?', answer: 'Level 1 covers pencil control and basic shading; Level 2 moves to realistic textures, still life and detailed sketching.' },
      { question: 'What next after this course?', answer: 'Portraits, charcoal realism, Manga or exam preparation build naturally on these foundations.' }
    ]
  },
  {
    id: '15',
    slug: 'teens-pencil-portrait',
    name: 'Pencil Portrait and Shading',
    shortDescription: 'Expressive, realistic pencil portraits for teens — proportions, features, shading and finishing.',
    fullDescription: 'Learn to draw faces with confidence. Our Pencil Portrait course teaches facial proportions, individual features, hair, skin tones and expressive shading step by step. Students practise eyes, nose, lips and ears separately before combining them into complete portraits, and finish with presentation-ready artwork. Ideal for teens who enjoy sketching people and want to move from outlines to lifelike portraits.',
    ageGroups: ['teens'],
    level: 'Intermediate',
    duration: '[Class Schedule]',
    image: '/Pencil Portrait and Shading.png',
    skills: ['Facial Proportions', 'Eyes, Nose and Lips', 'Hair and Texture', 'Skin Tone Shading', 'Light and Shadow on Faces', 'Expressions', 'Hair Detailing', 'Portrait Composition', 'Finishing Techniques'],
    projects: ['Feature Practice Sheets', 'Half-Face Studies', 'Complete Portraits', 'Expression Series'],
    faqs: [
      { question: 'Is basic sketching required first?', answer: 'Basic pencil comfort helps — our Pencil Shading beginners course is the ideal starting point.' },
      { question: 'What age is this course for?', answer: 'Designed for teenagers aged 12–17 years.' },
      { question: 'Will students complete full portraits?', answer: 'Yes — students progress from features to complete, finished portraits.' }
    ]
  },
  {
    id: '16',
    slug: 'teens-manga',
    name: 'Manga Sketching Level 1 & 2',
    shortDescription: 'Manga and Anime character art for ages 10+ — proportions, expressions, poses and original characters.',
    fullDescription: 'Does your child or teen love Manga and Anime characters? Our Manga Sketching Course transforms that interest into structured drawing skills. Instead of simply copying favourite characters, students learn how Manga characters are constructed — from basic head and body proportions to expressions, hairstyles, poses, clothing and complete character compositions. Level 1 covers Manga foundations; Level 2 moves to character development — dynamic poses, hands and feet, clothing, personality, backgrounds and original characters. No previous Manga drawing experience is required for Level 1.',
    ageGroups: ['kids', 'teens'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/Manga Sketching – Level 1 & 2.png',
    skills: ['Manga Face Proportions', 'Eyes, Nose and Mouth', 'Hairstyles', 'Facial Expressions', 'Head Angles', 'Body Proportions', 'Dynamic Poses', 'Hands and Feet', 'Clothing and Folds', 'Background Basics', 'Original Character Design', 'Complete Illustrations'],
    projects: ['Expression Sheets', 'Pose Practice Pages', 'Character Design Sheets', 'Original Manga Illustration'],
    faqs: [
      { question: 'What age is this course for?', answer: 'Ideal for children and teens aged 10 and above.' },
      { question: 'Is experience needed for Level 1?', answer: 'No previous Manga experience is required for Level 1.' },
      { question: 'Will students create original characters?', answer: 'Yes — Level 2 focuses on original character development and complete illustrations.' }
    ]
  },
  {
    id: '17',
    slug: 'teens-charcoal',
    name: 'Hyperrealism - Charcoal Painting',
    shortDescription: 'Advanced charcoal realism for teens — dramatic contrasts, textures and lifelike detail.',
    fullDescription: 'Push drawing to its most realistic edge. Our Hyperrealism with Charcoal program teaches advanced charcoal handling — deep blacks, delicate highlights, smooth gradients and intricate textures. Students study light behaviour, work on high-contrast subjects and build large detailed pieces with gallery-level finishing. Best suited for teens with solid sketching foundations who want a striking portfolio piece.',
    ageGroups: ['teens'],
    level: 'Advanced',
    duration: '[Class Schedule]',
    image: '/Hyperrealism - Charcoal Painting.png',
    skills: ['Charcoal Grades and Tools', 'Deep Tonal Range', 'Smooth Blending', 'Highlight Extraction', 'Texture Rendering', 'High-Contrast Studies', 'Detailed Eye and Skin Work', 'Large-Format Planning', 'Gallery Finishing'],
    projects: ['Contrast Studies', 'Texture Panels', 'Detailed Charcoal Portrait', 'Final Showcase Piece'],
    faqs: [
      { question: 'Is this suitable for beginners?', answer: 'We recommend completing pencil shading foundations first for the best experience.' },
      { question: 'What age is this course for?', answer: 'Designed for teenagers aged 12–17 years.' },
      { question: 'Are materials provided?', answer: 'Charcoal, blending tools and suitable paper are provided in the studio.' }
    ]
  },
  {
    id: '18',
    slug: 'faux-calligraphy',
    name: 'Faux Calligraphy',
    shortDescription: 'Modern calligraphy basics with regular pens — strokes, letter formation and beautiful lettering.',
    fullDescription: 'Learn the basics of modern calligraphy using regular pens. Faux Calligraphy teaches strokes, letter formation and beautiful lettering techniques without special tools — perfect for beginners, handmade cards and creative lettering. Each course focuses on building strong fundamentals before progressing to words, sentences, layouts and creative projects.',
    ageGroups: ['kids', 'teens', 'adults'],
    level: 'Beginner',
    duration: '[Class Schedule]',
    image: '/Faux Calligraphy.png',
    skills: ['Basic Strokes', 'Letter Formation', 'Spacing', 'Word Formation', 'Layouts', 'Creative Projects'],
    projects: ['Alphabet Practice Sheets', 'Quote Lettering', 'Handmade Cards', 'Lettering Artwork'],
    faqs: [
      { question: 'Do I need special pens?', answer: 'No — Faux Calligraphy uses regular pens, making it perfect for absolute beginners.' },
      { question: 'What age is this course for?', answer: 'Suitable for age 10 years and above, including adults.' },
      { question: 'What will I create?', answer: 'Lettered quotes, handmade cards and creative lettering artworks.' }
    ]
  },
  {
    id: '19',
    slug: 'brushpen-calligraphy',
    name: 'Brush Pen Calligraphy',
    shortDescription: 'Modern brush lettering — pressure control, thick-thin strokes, alphabets and word formation.',
    fullDescription: 'Master pressure control, thick and thin strokes, alphabets, word formation and modern brush lettering. Brush Pen Calligraphy is the most loved modern style — expressive, practical and perfect for cards, journals and artwork. Step-by-step guidance makes learning enjoyable for beginners and art enthusiasts alike.',
    ageGroups: ['kids', 'teens', 'adults'],
    level: 'Beginner to Intermediate',
    duration: '[Class Schedule]',
    image: '/Brush Pen Calligraphy.png',
    skills: ['Pressure Control', 'Thick and Thin Strokes', 'Brush Alphabets', 'Word Formation', 'Sentence Composition', 'Creative Lettering Projects'],
    projects: ['Stroke Drill Sheets', 'Alphabet Practice', 'Quote Compositions', 'Journal Lettering'],
    faqs: [
      { question: 'Which pens do I need?', answer: 'Basic brush pens are provided in the studio; guidance for personal kits is included.' },
      { question: 'What age is this course for?', answer: 'Suitable for age 10 years and above, including adults.' },
      { question: 'Is it suitable for beginners?', answer: 'Yes — courses start from fundamental strokes before words and layouts.' }
    ]
  },
  {
    id: '20',
    slug: 'cut-nib-calligraphy',
    name: 'Cut Nib Calligraphy',
    shortDescription: 'Traditional cut-nib lettering — correct angles, strokes, spacing and structured letterforms.',
    fullDescription: 'Explore traditional lettering using a cut nib while learning correct angles, strokes, spacing and structured letterforms. Cut Nib Calligraphy builds discipline and precision — ideal for learners who love classic scripts, formal layouts and timeless lettering.',
    ageGroups: ['teens', 'adults'],
    level: 'Intermediate',
    duration: '[Class Schedule]',
    image: '/Cut Nib Calligraphy.png',
    skills: ['Nib Angles', 'Structured Strokes', 'Letterforms', 'Spacing and Rhythm', 'Word and Sentence Layouts', 'Traditional Compositions'],
    projects: ['Angle Practice Grids', 'Alphabet Studies', 'Formal Quote Pieces', 'Envelope Lettering'],
    faqs: [
      { question: 'Are tools provided?', answer: 'Basic cut-nib tools, ink and practice sheets are provided.' },
      { question: 'What age is this course for?', answer: 'Recommended for teens and adults.' },
      { question: 'Do I need prior calligraphy experience?', answer: 'Faux or brush pen basics help, but structured beginners can join directly.' }
    ]
  },
  {
    id: '21',
    slug: 'copperplate-calligraphy',
    name: 'Copperplate Calligraphy',
    shortDescription: 'Elegant pointed-pen script — fundamental strokes, alphabets, flourishing and creative projects.',
    fullDescription: 'Learn elegant pointed-pen calligraphy, from fundamental strokes and alphabets to word formation, flourishing, sentence alignment and creative projects. Copperplate is the queen of scripts — refined, expressive and perfect for invitations, artwork and professional lettering.',
    ageGroups: ['teens', 'adults'],
    level: 'Intermediate to Advanced',
    duration: '[Class Schedule]',
    image: '/Copperplate Calligraphy.png',
    skills: ['Pointed-Pen Basics', 'Fundamental Strokes', 'Minuscules and Majuscules', 'Word Formation', 'Flourishing', 'Sentence Alignment', 'Creative Projects'],
    projects: ['Stroke Foundations', 'Alphabet Mastery Sheets', 'Flourished Quotes', 'Invitation Lettering'],
    faqs: [
      { question: 'Is Copperplate difficult for beginners?', answer: 'It needs patience — our step-by-step method starts from basic strokes before letters.' },
      { question: 'What age is this course for?', answer: 'Recommended for teens and adults.' },
      { question: 'What will I create?', answer: 'Flourished quotes, invitation pieces and elegant lettering artworks.' }
    ]
  },
  {
    id: '22',
    slug: 'adult-painting-fine-art',
    name: 'Painting & Fine Art',
    shortDescription: 'Canvas, oils, watercolours, glass, fluid and more — beginner-friendly to advanced painting techniques, guided step by step.',
    fullDescription: 'Canvas Painting — Learn to create beautiful artwork on canvas while exploring composition, colour mixing, layering, brush techniques and finishing.\n\nOil Painting — Explore traditional oil painting techniques including colour mixing, blending, layering, highlights, shadows and creating depth in your artwork.\n\nOne Stroke Painting — Learn decorative painting using specialised brush-loading and one-stroke techniques to create beautiful flowers, leaves and compositions.\n\nWatercolour & Gouache Painting — Discover washes, blending, layering, colour control and different painting techniques using transparent watercolours and vibrant gouache.\n\nGlass Painting — Learn outlining, colour application and decorative techniques to transform glass surfaces into colourful works of art.\n\nFluid Art — Explore free-flowing colours and pouring techniques to create striking abstract patterns and contemporary artwork.\n\nAlcohol Ink Art — Experiment with alcohol inks to create vibrant, flowing patterns and unique abstract compositions.\n\nCoffee Painting — Create monochromatic artwork using coffee as your painting medium while learning tonal values, shading and layering.\n\nKnife Painting — Learn to use palette knives to create bold strokes, textures and expressive paintings on canvas.\n\nStill Life Painting — Develop observation, proportion, composition, light, shadow and colour skills by painting objects from life.',
    ageGroups: ['adults'],
    level: 'All Levels',
    duration: '[Class Schedule]',
    image: '/Painting & Fine Art.png',
    skills: ['Canvas Painting Techniques', 'Oil Painting Foundations', 'One Stroke Brush Loading', 'Watercolour Washes and Layering', 'Gouache Application', 'Glass Painting Outlining and Filling', 'Fluid Art Pouring', 'Alcohol Ink Effects', 'Coffee Tonal Painting', 'Palette Knife Textures', 'Colour Mixing and Harmony', 'Composition and Finishing'],
    projects: ['Canvas Artwork', 'Oil Painting', 'One-Stroke Floral Piece', 'Fluid Art Abstract'],
    faqs: [
      { question: 'Do I need prior painting experience?', answer: 'No — courses start from beginner-friendly foundations and move towards advanced techniques at your own pace.' },
      { question: 'Which mediums will I explore?', answer: 'Canvas, oils, one stroke, watercolour, gouache, glass painting, fluid art, alcohol ink, coffee painting and knife painting.' },
      { question: 'Are materials provided?', answer: 'Basic materials are included for studio sessions — contact us for the full material list.' }
    ]
  },
  {
    id: '23',
    slug: 'adult-drawing-sketching',
    name: 'Drawing, Sketching & Illustration',
    shortDescription: 'Portraits, hyperrealism, Manga, memory drawing and pen mandalas — observation, proportion and expression.',
    fullDescription: 'Portrait & Sketching — Learn facial proportions, features, shading and sketching techniques to create expressive and realistic portraits.\n\nHyperrealism with Charcoal — Explore advanced charcoal techniques to create highly detailed, realistic artwork with strong contrasts, textures, highlights and shadows.\n\nManga Art — Learn Manga-style character drawing, facial expressions, body proportions, poses, clothing and character development.\n\nMemory Drawing — Develop observation, imagination and composition skills to create scenes and visual stories from memory.\n\nPen Mandala — Create intricate hand-drawn mandalas while learning symmetry, patterns, detailing and fine-line techniques.',
    ageGroups: ['adults'],
    level: 'All Levels',
    duration: '[Class Schedule]',
    image: '/Drawing, Sketching & Illustration.png',
    skills: ['Facial Proportions and Features', 'Expressive Portrait Shading', 'Hyperrealism Charcoal Techniques', 'Manga Character Drawing', 'Facial Expressions and Poses', 'Clothing and Character Design', 'Memory Drawing Composition', 'Pen Mandala Symmetry', 'Fine-Line Pattern Detailing'],
    projects: ['Realistic Portrait Study', 'Charcoal Hyperrealism Piece', 'Manga Character Sheet', 'Hand-Drawn Pen Mandala'],
    faqs: [
      { question: 'Which course is right for a complete beginner?', answer: 'Start with drawing foundations — portrait and memory drawing modules build from the basics upwards.' },
      { question: 'Is hyperrealism suitable for intermediates?', answer: 'Yes — it builds on the strong shading and observation skills developed in the earlier modules.' },
      { question: 'Do I need drawing experience for Manga Art?', answer: 'No — character proportions, expressions and poses are taught step by step.' }
    ]
  },
  {
    id: '24',
    slug: 'adult-mandala-art',
    name: 'Mandala Art',
    shortDescription: 'Dot mandala and swooshes, basic to advance — colour combinations, symmetry and detailed finishing.',
    fullDescription: 'Dot Mandala & Swooshes – Basic to Advance — Progress from basic dotting techniques to advanced Mandala compositions while learning colour combinations, symmetry, dot sizes, patterns, swooshes and detailed finishing.',
    ageGroups: ['adults'],
    level: 'All Levels',
    duration: '[Class Schedule]',
    image: '/Mandala Art.png',
    skills: ['Dot Mandala Basics', 'Dot Size and Spacing Control', 'Swoosh Techniques', 'Colour Combination Planning', 'Radial Symmetry', 'Pattern Layering', 'Advanced Mandala Composition', 'Detailed Finishing'],
    projects: ['Basic Dot Mandala Board', 'Swoosh Composition', 'Advanced Mandala Artwork'],
    faqs: [
      { question: 'Is this course suitable for beginners?', answer: 'Yes — it starts from basic dotting techniques and progresses towards advanced compositions.' },
      { question: 'What materials are used?', answer: 'Acrylic paints, dotting tools and canvas or board bases are provided at the studio.' },
      { question: 'Will I complete a finished mandala?', answer: 'Yes — you progress from practice sheets to a complete advanced mandala artwork.' }
    ]
  },
  {
    id: '25',
    slug: 'adult-traditional-indian-art',
    name: 'Traditional Indian Art Forms',
    shortDescription: "Celebrate India's rich artistic heritage — Gond, Kerala Mural, Madhubani, Warli, Pichwai, Tanjore and more.",
    fullDescription: "Celebrate India's rich artistic heritage through our collection of traditional Indian art courses, where participants learn the techniques, patterns, stories and distinctive visual styles associated with different regions of India.\n\nGond Art – Madhya Pradesh — Explore the beautiful tribal art of Gond through detailed lines, dots, patterns, animals, birds and nature-inspired compositions.\n\nKerala Mural — Learn the distinctive style of Kerala mural painting through traditional compositions, bold outlines, expressive figures and rich colours.\n\nLippan Art — Discover the traditional mud-and-mirror art inspired by Kutch, creating decorative designs using relief work and mirrors.\n\nMadhubani – Bihar — Learn the intricate lines, borders, patterns, figures and vibrant compositions associated with traditional Madhubani painting.\n\nMeenakari-Inspired Art — Explore decorative designs inspired by traditional Meenakari aesthetics, focusing on intricate patterns, vibrant colours and ornamental detailing.\n\nPichwai Painting — Explore the elegance of Pichwai-inspired art through lotuses, cows, traditional motifs and richly decorative compositions.\n\nTanjore / Thanjavur Painting – Tamil Nadu — Learn the traditional process of creating richly embellished Tanjore-style paintings using relief work, decorative stones and gold-effect detailing.\n\nTholu Bommalata Art — Explore artwork inspired by the traditional shadow-puppet art of Andhra Pradesh, characterised by decorative figures, bold outlines and intricate detailing.\n\nWarli Art – Maharashtra — Learn Maharashtra's iconic tribal art style using simple geometric human figures to depict village life, celebrations and everyday stories.\n\nPattachitra – Odisha & West Bengal — Explore the intricate decorative traditions associated with Pattachitra through detailed outlines, mythological themes, borders and traditional motifs.\n\nKalamkari – Andhra Pradesh & Telangana — Discover Kalamkari-inspired art through flowing lines, floral patterns, traditional motifs and narrative compositions.",
    ageGroups: ['adults'],
    level: 'All Levels',
    duration: '[Class Schedule]',
    image: '/Traditional Indian Art Forms.png',
    skills: ['Gond Line and Dot Patterns', 'Kerala Mural Outlines and Colours', 'Lippan Relief and Mirror Work', 'Madhubani Borders and Figures', 'Meenakari Ornamentation', 'Pichwai Traditional Motifs', 'Tanjore Gold-Effect Detailing', 'Warli Geometric Figures', 'Pattachitra Line Work', 'Kalamkari-Inspired Motifs'],
    projects: ['Gond Artwork', 'Madhubani Painting', 'Warli Composition', 'Choice of Regional Art Piece'],
    faqs: [
      { question: 'Do I need to know any Indian art form already?', answer: 'No — each art form is taught from its basic patterns, motifs and line work.' },
      { question: 'Can I learn multiple art forms?', answer: 'Yes — the courses are modular, so you can explore several styles over time.' },
      { question: 'Are materials provided?', answer: 'Basic materials are included; specialised supplies for specific art forms are shared at enrolment.' }
    ]
  },
  {
    id: '26',
    slug: 'adult-contemporary-texture',
    name: 'Contemporary, Texture & Mixed-Media Art',
    shortDescription: 'Resin, texture, sculpture, relief, mirror mosaic and mixed media — modern, dimensional artwork.',
    fullDescription: 'Clay & Texture on Canvas — Combine clay work with painting and texturing techniques to create dimensional and contemporary canvas artwork.\n\nSculpture Art — Learn basic sculpting, shaping and modelling techniques to transform creative concepts into three-dimensional artworks.\n\nResin Art — Explore resin pouring, colour effects, layering and decorative techniques to create contemporary artworks and functional pieces.\n\nRelief Art — Create raised, three-dimensional designs using layering and modelling techniques for decorative wall art.\n\nMixed Media — Combine multiple materials, paints, textures and techniques in a single artwork for greater creative freedom and experimentation.\n\nWall Textures — Learn decorative texture techniques suitable for creating statement walls, panels and artistic surfaces.\n\nTexture Art — Create modern textured artwork using different tools, mediums, layering techniques and contemporary compositions.\n\nMirror Mosaic — Learn to arrange and combine mirror pieces into decorative patterns and artistic compositions.',
    ageGroups: ['adults'],
    level: 'All Levels',
    duration: '[Class Schedule]',
    image: '/Contemporary, Texture & Mixed-Media Art.png',
    skills: ['Clay Work on Canvas', 'Textured Surface Techniques', 'Basic Sculpting and Modelling', 'Resin Pouring and Colour Effects', 'Relief Construction', 'Mixed-Media Layering', 'Wall Texture Panels', 'Mirror Mosaic Patterns'],
    projects: ['Textured Canvas Artwork', 'Resin Art Piece', 'Relief or Mosaic Panel'],
    faqs: [
      { question: 'Is resin art safe for beginners?', answer: 'Yes — it is taught step by step with proper handling and safety practices.' },
      { question: 'Do I need sculpture experience?', answer: 'No — basic shaping and modelling techniques are covered from the ground up.' },
      { question: 'What will I take home?', answer: 'Finished dimensional pieces — textured canvas, resin art and relief or mosaic work.' }
    ]
  },
  {
    id: '27',
    slug: 'adult-decorative-creative-arts',
    name: 'Decorative & Creative Arts',
    shortDescription: 'Decoupage, miniature crafting and candle making — transform everyday objects into decorative pieces.',
    fullDescription: 'Decoupage & Reverse Decoupage — Learn creative surface-decoration techniques using papers, paints, layering and finishing to transform everyday objects into decorative pieces.\n\nMiniature Crafting — Discover the fascinating world of miniature art by creating detailed small-scale objects, scenes and decorative compositions.\n\nCandle Making — Learn the fundamentals of creative candle making, including wax handling, fragrance, colours, moulds and decorative candle designs.',
    ageGroups: ['adults'],
    level: 'All Levels',
    duration: '[Class Schedule]',
    image: '/Decorative & Creative Arts.png',
    skills: ['Decoupage Surface Preparation', 'Paper Layering and Sealing', 'Reverse Decoupage Techniques', 'Miniature Construction Detailing', 'Small-Scale Scene Composition', 'Wax Handling and Candle Making', 'Fragrance and Colour Blending', 'Mould Use and Finishing'],
    projects: ['Decorated Decoupage Object', 'Miniature Scene or Object', 'Handmade Decorative Candle'],
    faqs: [
      { question: 'Are these courses beginner-friendly?', answer: 'Yes — every technique is taught step by step with hands-on practice.' },
      { question: 'Are materials included?', answer: 'Basic craft materials are provided; specialty items are shared per project.' },
      { question: 'Will I finish take-home pieces?', answer: 'Yes — each module ends with a completed decorative piece you take home.' }
    ]
  }
];
