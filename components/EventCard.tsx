import { EventCardProps } from "@/types";
import Image from "next/image";

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;


