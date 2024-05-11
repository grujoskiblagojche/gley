import { Comment } from "@/types/comment";
import { Movie } from "@/types/movie";

const mockProfileComments: Comment[] = [
  {
    id: "1",
    author: {
        image: 'natasha',
        name: 'Наташа'
    },
    text: 'Lorem ipsum dolor sit amet consectetur. Aliquam massa cursus ac morbi nisl lectus nisl eu aliquam.'
  },
  {
    id: "2",
    author: {
        image: 'sime',
        name: 'Симе'
    },
    text: 'Lorem ipsum dolor sit amet consectetur..'
  },
];

export const profileCommentsMockData = (): Comment[] => mockProfileComments;


const mockProfileMovies: Movie[] = [
  {
    image: "movie-1"
  },
  {
    image: "movie-2"
  },
  {
    image: "movie-3"
  },
  {
    image: "movie-4"
  },
  {
    image: "movie-5"
  }
];

export const profileMoviesMockData = (): Movie[] => mockProfileMovies;
