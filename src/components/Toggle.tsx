import {SetStateAction} from "react";
import {Dispatch} from "react";
import {FC} from "react";

const Toggle: FC<{setActive: Dispatch<SetStateAction<boolean>>}> = ({
  setActive,
}) => {
  return (
    <button
      onClick={() => setActive((active) => !active)}
      className="absolute top-0 left-0 z-10 p-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
    />
  );
};

export default Toggle;
