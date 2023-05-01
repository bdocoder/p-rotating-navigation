import {FC, ReactNode} from "react";

const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark">
      {children}
    </div>
  );
};

export default Layout;
