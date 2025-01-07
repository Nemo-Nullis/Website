import Countdown, { zeroPad } from "react-countdown";
import LaunchCountdownItem from "./LaunchCountdownItem";

const LaunchCountdown = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h4 className="text-4xl text-white">Countdown to Nullion's first halving from 50 to 25 NULL block rewards!"</h4>

      <Countdown
        date={1735689600 * 1000}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="grid grid-cols-4 items-center justify-center gap-4 px-6 lg:gap-7">
            <LaunchCountdownItem
              label="Days"
              value={(days / 30) * 100}
              time={zeroPad(days)}
            />

            <LaunchCountdownItem
              label="Hours"
              value={(hours / 60) * 100}
              time={zeroPad(hours)}
            />

            <LaunchCountdownItem
              label="Minutes"
              value={(minutes / 60) * 100}
              time={zeroPad(minutes)}
            />

            <LaunchCountdownItem
              label="Seconds"
              value={(seconds / 60) * 100}
              time={zeroPad(seconds)}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LaunchCountdown;
