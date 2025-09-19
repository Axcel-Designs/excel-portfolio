import { servicesData } from "@/utils/data";

export default function Service() {
  return (
    <section id="services" className="container mx-auto items-center gap-4 p-6 text-center">
      <div className="my-6">
        <p className="text-4xl my-6">SERVICES</p>
        <p>
          Comprehensive digital solutions to help your business thrive in the
          modern world.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {servicesData.map(({ name, des, icon },i) => (
          <div key={i}>
            <div className="flex justify-center gap-2 items-center">
              <div>{icon}</div>
              <p className="text-2xl my-4">{name}</p>
            </div>
            <p>{des}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
