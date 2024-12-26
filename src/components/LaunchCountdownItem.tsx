type LaunchCountdownItemProps = {
    label: string;
    value: number;
    time: string;
  };
  
  const LaunchCountdownItem = ({ label, time }: LaunchCountdownItemProps) => {
    return (
      <h4 className="flex flex-col items-center rounded-3xl bg-black p-4 text-white">
        <span className="text-2xl font-semibold">{time}</span>
        <span className="text-sm lg:text-base">{label}</span>
      </h4>
    );
  };
  
  export default LaunchCountdownItem;
  