import Container from "../Layout/Container";
import { RoadmapData } from "../../data/data";

const Roadmap = () => {
  return (
    <Container>
      <h1 className="bg-gradient-five bg-cover bg-clip-text bg-center pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
        Roadmap
      </h1>

      <div className="grid place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {RoadmapData.map((feature, index) => (
          <div key={index} className=" flex flex-col items-center gap-4">

            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-semibold text-app-50">
                {feature.name}
              </h3>
              <p className="text-center">{feature.description}</p>
            </div>

          </div>
        ))}
      </div>
    </Container>
  );
};

export default Roadmap;
