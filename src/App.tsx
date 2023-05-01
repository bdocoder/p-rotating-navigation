import {FC, useState} from "react";
import Layout from "./components/Layout";
import Toggle from "./components/Toggle";
import Main from "./components/Main";
import Nav from "./components/Nav";

const App: FC = () => {
  const [active, setActive] = useState(false);
  return (
    <Layout>
      <Toggle setActive={setActive} />
      <Main active={active} />
      <Nav active={active} />
    </Layout>
  );
};

export default App;
