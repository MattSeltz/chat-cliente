import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";

export const HomePage = () => (
  <div className="h-screen overflow-hidden pb-10">
    <h3 className="text-center font-serif font-semibold mt-3">
      Matías Seltzer
    </h3>
    <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col items-center gap-10 max-w-lg mx-auto">
      <ButtonComponent>Nuevo Chat</ButtonComponent>
      <ButtonComponent>Nuevo Grupo</ButtonComponent>

      <div className="flex flex-col items-center gap-10 overflow-auto ">
        <CardComponent dir={false}>Pepito</CardComponent>
        <CardComponent dir={true}>Pepito</CardComponent>
        <CardComponent dir={false}>Pepito</CardComponent>
        <CardComponent dir={true}>Pepito</CardComponent>
        <CardComponent dir={false}>Pepito</CardComponent>
        <CardComponent dir={true}>Pepito</CardComponent>
      </div>
    </div>
  </div>
);
