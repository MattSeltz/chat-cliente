import { MessageComponent } from "../components/MessageComponent";
import { SendMessageComponent } from "../components/SendMessageComponent";

export const ChatPage = () => (
  <div className="h-screen overflow-hidden pb-10">
    <h3 className="text-center font-serif font-semibold mt-3">Pepito</h3>
    <div className="bg-blue-500 h-full rounded-t-3xl py-10 mt-3 flex flex-col items-center gap-10 max-w-lg mx-auto">
      <div className="flex flex-col items-center gap-10 overflow-auto ">
        <MessageComponent dir={false} group={false}>
          Pepito
        </MessageComponent>
        <MessageComponent dir={true} group={false}>
          Pepito
        </MessageComponent>
        <MessageComponent dir={false} group={false}>
          Pepito
        </MessageComponent>
        <MessageComponent dir={true} group={false}>
          Pepito
        </MessageComponent>
        <MessageComponent dir={false} group={false}>
          Pepito
        </MessageComponent>
        <MessageComponent dir={true} group={false}>
          Pepito
        </MessageComponent>
      </div>
      <SendMessageComponent />
    </div>
  </div>
);
