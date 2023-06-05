export interface Review {
  _id: string;
  star: number;
  description: string;
  user: User;
  isPublished: boolean;
  date: string;
  __v: number;
}

interface User {
  userId: string;
  firstName: string;
  lastName: string;
  _id: string;
}