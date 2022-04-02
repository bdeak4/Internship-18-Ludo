import { useMessage } from "providers/game/hooks";
import { MessageWrapper } from "./styled";

const Message = () => {
  const [message] = useMessage();
  if (!message) {
    return null;
  }
  return <MessageWrapper>{message}</MessageWrapper>;
};

export default Message;
