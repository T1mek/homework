import { IBlog } from '../models/blog';

export const blogs: IBlog[] = [
  {
    id: 1,
    img: '../assets/images/z.png',
    title: 'What are color profiles and how they work in graphic design',
    inner: 'Podcast',
    meta: {
      design: 'Design',
      data: 'July 28, 2020',
      duration: '36 min',
    },
    text: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    click: 'Listen',
  },
  {
    id: 2,
    img: '../assets/images/z2.png',
    title: 'How to choose the first programming language for a beginner',
    inner: 'Article',
    meta: {
      design: 'Development',
      data: 'September 1, 2020',
    },
    text: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    click: 'Read',
  },
  {
    id: 3,
    img: '../assets/images/z3.png',
    title:
      'Should you choose a creative profession if you are attracted to creativity?',
    inner: 'Article',
    meta: {
      design: 'Design',
      data: 'August 8, 2020',
    },
    text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    click: 'Read',
  },
];
