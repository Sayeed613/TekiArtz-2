
const Statistics = () => {
    const stats = [
      "4 Happy Clients ",
      "5 Projects ",
      "1463 Hours Of Support ",
      "7 Total Employees "
    ];

    return (
      <div className="infinite-scroll-container dark:bg-black bg-white h-auto ">
        <div className="infinite-scroll-content dark:text-white text-black">
          {stats.map((stat, index) => (
            <div className="stat text-6xl " key={index}>
              {stat} {" "} ·
            </div>
          ))}
          {stats.map((stat, index) => (
            <div className="stat text-6xl  " key={index + stats.length}>
              {stat} {" "} ·
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Statistics;
