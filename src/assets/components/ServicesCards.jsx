import { HoverEffect } from "../ui/card-hover-effect.ui";
export function ServicesCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-lg text-start md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
        We have built mobile applications with multiple features.
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Admin System",
    description: "Interactive dashboard for real-time insights and user management.",
  },
  {
    title: "Calendar",
    description: "Task scheduling with reminders and event export features.",
  },
  {
    title: "Maps",
    description: "Location services with geolocation and real-time tracking.",
  },
  {
    title: "Push Notification",
    description: "Real-time notifications and QR code integration for purchases.",
  },
  {
    title: "SMS",
    description: "Instant messaging with task management features.",
  },
  {
    title: "Payment",
    description: "Multiple secure payment methods and user-friendly options.",
  },
];
