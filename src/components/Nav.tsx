import {
  ExclamationCircleIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import cn from "classnames";
import {FC} from "react";

const links = [
  {text: "Home", icon: HomeIcon, spacing: 1},
  {text: "About", icon: ExclamationCircleIcon, spacing: 2.75},
  {text: "Contact", icon: PhoneIcon, spacing: 4.5},
];

const Nav: FC<{active: boolean}> = ({active}) => {
  return (
    <nav
      className={cn(
        "absolute top-0 left-0 h-screen",
        "flex flex-col justify-end items-start pb-12"
      )}
    >
      {links.map(({spacing, text, icon: LinkIcon}) => (
        <a
          href="#"
          className={cn(
            "flex items-center py-2 h-12 text-light hover:text-primary",
            "transition-[margin]",
            active && "delay-100"
          )}
          style={{marginLeft: active ? spacing + "rem" : "-8rem"}}
        >
          <LinkIcon className="h-full" />
          <span className="ml-2 text-lg font-medium">{text}</span>
        </a>
      ))}
    </nav>
  );
};

export default Nav;
