export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

