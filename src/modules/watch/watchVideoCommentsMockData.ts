import { Comment } from "@/types/comment";

const mockVideoComments: Comment[] = [
  {
    id: "1",
    author: {
        image: 'natasha',
        name: 'Наташа'
    },
    text: 'Најомилениот филм на татко ми ...'
  },
  {
    id: "2",
    author: {
        image: 'sime',
        name: 'Симе'
    },
    text: 'Колку добра сцена!'
  },
];

export const videoCommentsMockData = (): Comment[] => mockVideoComments;
