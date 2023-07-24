import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <BsHeartFill color="red" size={20} onClick={toggle} />;
  return <BsHeart size={20} onClick={toggle} />;
};

export default Like;
