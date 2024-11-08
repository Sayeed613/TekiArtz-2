import { memo, useState } from "react";
import { cn } from "../../lab/utils";

export const Card = memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative overflow-hidden h-full w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-contain w-full h-full"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end p-2 md:p-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mx-auto">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
      {cards.map((card, index) => (
        <a
          key={card.title}
          href={card.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </a>
      ))}
    </div>
  );
}
