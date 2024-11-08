
import { HeroParallax } from "../ui/hero-parallax.ui";

export function Hero() {
  return (
    <div id="home">
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: "Cloud Computing & Networking",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1681426655848-d5fd8b9ff528?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
  },
  {
    title: "IoT (Internet of Things)",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJuZXQlMjBvZiUyMHRoaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Mobile App Development",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683936163005-a506303344b3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Web Application Development",
    thumbnail:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwQXBwbGljYXRpb24lMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "ERP Systems ",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1687463804079-1d541b9c4319?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RVJQJTIwU3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "RFID Technology",
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJGSUQlMjBUZWNobm9sb2d5fGVufDB8fDB8fHww",
  },

  {
    title: "Data Analytics ",
    thumbnail:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGF0YSUyMEFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "CRM (Customer Relationship Management) ",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q1JNfGVufDB8fDB8fHww",
  },
  {
    title: "Collaboration & Workspaces ",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29sbGFib3JhdGlvbiUyMCUyNiUyMFdvcmtzcGFjZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "E-commerce & POS Systems ",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683288295826-9c0bfba5d10b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RSUyMGNvbW1lcmNlJTIwJTI2JTIwUE9TJTIwU3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cloud Security",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xvdWQlMjBTZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    title: "Artificial Intelligence ",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Automation & Robotics ",
    thumbnail:
      "https://images.unsplash.com/photo-1674544362969-a4269ef0ea69?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXV0b21hdGlvbiUyMCUyNiUyMFJvYm90aWNzfGVufDB8fDB8fHww",
  },
  {
    title: "Backend Development",
    thumbnail:
      "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFja2VuZCUyMERldmVsb3BtZW50fGVufDB8fDB8fHww",
  },
  {
    title: "Cloud Integration",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1700830193301-99e1c863ee38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xvdWQlMjBJbnRlZ3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];
