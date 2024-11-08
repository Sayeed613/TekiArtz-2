import { Tabs } from "../ui/tabs";
import { FocusCards } from "../ui/FocusCards";

export function PortfolioData() {


  const tabs = [
    {
      title: "All",
      value: "all",
      content: (
        <div className="w-full overflow-hidden overflow-y-auto relative h-[24rem] sm:h-[34rem] lg:h-[30rem] rounded-2xl p-6 sm:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="p-2 sm:text-sm">All</p>
          <FocusCards
            cards={[
              {
                title: "Shifa Piles Clinic Website",
                src: "https://tekiartz.com/assets/img/portfolio/website/shifaWeb.png",
                link: "https://shifapilescare.com/",
              },
              {
                title: "TekiArtz Technologies Website",
                src: "https://tekiartz.com/assets/img/portfolio/website/tekiartz.png",
                link: "https://tekiartz.com/",
              },
              {
                title: "offers4deals",
                src: "https://i.postimg.cc/QdJPFFDW/web-2.png",
                link: "https://offers4deals.com/",
              },
              {
                title: "Febitinfra Solutions",
                src: "https://i.postimg.cc/R0wkQgwq/web-1.png",
                link: "https://www.febitinfrasolutions.com/",
              },
              {
                title: "Mh Interio",
                src: "https://i.postimg.cc/FsjC6Y7n/web-3.png",
                link: "https://www.mhinterio.com/",
              },
              {
                title: "Tulsi Water",
                src: "https://tekiartz.com/assets/img/portfolio/logo/tulsi.png",
              },
              {
                title: "Shifa Piles Clinic",
                src: "https://tekiartz.com/assets/img/portfolio/logo/shifa.svg",
              },
              {
                title: "FeBIT Infra Solutions",
                src: "https://tekiartz.com/assets/img/portfolio/logo/FB_bg.png",
              },
              {
                title: "FeBIT Infra Solutions",
                src: "https://tekiartz.com/assets/img/portfolio/logo/febit.png",
              },
              {
                title: "TekiArtz",
                src: "https://tekiartz.com/assets/img/portfolio/logo/tekiArtz.png",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Web",
      value: "web",
      content: (
        <div className="w-full overflow-hidden overflow-y-auto relative h-[26rem] sm:h-[34rem] lg:h-[30rem] rounded-2xl p-6 sm:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="p-2 sm:text-sm">Web</p>
          <FocusCards
            cards={[
              {
                title: "Shifa Piles Clinic Website",
                src: "https://tekiartz.com/assets/img/portfolio/website/shifaWeb.png",
                link: "https://shifapilescare.com/",
              },
              {
                title: "TekiArtz Technologies Website",
                src: "https://tekiartz.com/assets/img/portfolio/website/tekiartz.png",
              },
              {
                title: "offers4deals",
                src: "https://i.postimg.cc/QdJPFFDW/web-2.png",
                link: "https://offers4deals.com/",
              },
              {
                title: "Febitinfra Solutions",
                src: "https://i.postimg.cc/R0wkQgwq/web-1.png",
                link: "https://www.febitinfrasolutions.com/",
              },
              {
                title: "Mh Interio",
                src: "https://i.postimg.cc/FsjC6Y7n/web-3.png",
                link: "https://www.mhinterio.com/",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Logo",
      value: "logo",
      content: (
        <div className="w-full overflow-hidden overflow-y-auto relative h-[26rem] sm:h-[34rem] lg:h-[30rem] rounded-2xl p-6 sm:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="p-2 sm:text-sm z-10">Logo</p>
          <FocusCards
            cards={[
              {
                title: "Tulsi Water",
                src: "https://tekiartz.com/assets/img/portfolio/logo/tulsi.png",
              },
              {
                title: "Shifa Piles Clinic",
                src: "https://tekiartz.com/assets/img/portfolio/logo/shifa.svg",
              },
              {
                title: "FeBIT Infra Solutions",
                src: "https://tekiartz.com/assets/img/portfolio/logo/FB_bg.png",
              },
              {
                title: "FeBIT Infra Solutions",
                src: "https://tekiartz.com/assets/img/portfolio/logo/febit.png",
              },
              {
                title: "TekiArtz",
                src: "https://tekiartz.com/assets/img/portfolio/logo/tekiArtz.png",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "App",
      value: "app",
      content: (
        <div className="w-full overflow-hidden relative h-[26rem] sm:h-[34rem] lg:h-[30rem] rounded-2xl p-6 sm:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="p-2 sm:text-sm">App</p>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
            Currently Working On
          </h2>
        </div>
      ),
    },
  ];

  return (
    <div className="dark:bg-black first-letter:flex flex-col  bg-white sm:h-[50rem] h-[40rem] items-start justify-start  ">
      <div
        className="relative max-w-4xl sm:max-w-6xl mx-auto w-full  p-4 sm:p-6 md:p-8 lg:p-10"
        id="portfolio"
      >
        <h1 className="text-lg text-start md:text-4xl mb-4 text-[#0b726f]  max-w-4xl">
          Portfolio
        </h1>

        <p className="text-neutral-700 text-start dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Trusted by businesses worldwide. Take a look at some of the projects
          we’ve been working on.
        </p>

        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
