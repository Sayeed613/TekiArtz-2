import { Timeline } from "../ui/timeLine";

export function ServiceDevelopmentProject() {
  const data = [
    {
      title: "Web App",
      content: (
        <div>
          <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs  md:text-sm font-normal mb-8">
            A website is a must-have for every business to establish a digital
            footprint and boost digital visibility across globe.
          </p>
          <br />
          <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            The web design we provide at{" "}
            <span className="text-[#0b726f]">TekiArtz</span> is optimized for
            maximum website eyeballs and traffic to help you create awareness
            for your brand. With the most efficient web development processes in
            place, we ensure your website development is completed on time and
            within budget.{" "}
          </p>
          <p className="text-xl font-semibold text-gray-700 text-start mb-2">
            {" "}
            · Our web design and development options are based on your budget
            and brand objectives!!
          </p>
          <p className="text-xl font-semibold text-gray-700 text-start  mb-2">
            · Custom HTML website design and development
          </p>
          <p className="text-xl font-semibold text-gray-700 text-start  mb-2">
            · What makes your website visitors impressed and engaged?
          </p>
          <br />
          <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs  md:text-sm font-normal mb-8">
            SEO optimized, Dynamic & responsive pages, Highspeed pages and
            Creative design.
          </p>
        </div>
      ),
    },
    {
      title: "MOBILE APP",
      content: (
        <div>
          <p className="text-xl font-semibold text-gray-700 text-start  mb-2">
            · Get high performance and scalable mobile app development services
            for your business
          </p>
          <br />
          <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Today, mobile applications are an essential part of every brand's
            marketing strategy. You should have a mobile-first online strategy
            for your business, taking into consideration the advent of
            smartphones on the planet, especially in developing countries.
          </p>
          <p className="text-xl font-semibold text-gray-700 text-start  mb-2">
            · Framework for rapid application development
          </p>
          <br />
          <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            For our app development, we use a rapid application development
            framework, which uses prebuilt components instead of starting from
            scratch, allowing us to deliver apps in 10% of the time it normally
            takes.{" "}
          </p>
        </div>
      ),
    },
    {
      title: "ERP, IoT, RFID",
      content: (
        <div>
        <p className="text-xl font-semibold text-gray-700 text-start  mb-2">
          · We Develop IoT / RFID applications to create a smart environment
        </p>
        <br />
        <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Development of robust and feature-rich IoT apps is one of our key areas of expertise. Contact us to deliver best-in-class results!
        </p>
        <p className="text-xl font-semibold text-gray-700 text-start  mb-2">
          · Build Custom ERP System which is very Important to Your Company.
        </p>
        <br />
        <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        ERP Systems are important to your company because they allow you to streamline your workflow and address a number of pain points in day-to-day operations. With these software solutions at your disposal, you can speed up customer accommodation, eliminate repetitive back-office processes, consolidate data more efficiently, and improve team communication.
        </p>
      </div>


      ),
    },
  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
