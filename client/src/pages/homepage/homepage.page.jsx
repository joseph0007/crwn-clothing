// import "./homepage.styles.scss";
import { HomePageContainer } from "./homapge.styles";
import Menu from "../../components/menu/menu.component";
import { Profiler } from "react";

const HomePage = () => (
  // the Route props will be available here to use but we need to pass the props into Menu component fot it to be able access it
  // but then again it is not a good practice to do so hence we use the withRouter() method which enables us to usr the Route
  // props even without passing it(props drilling)
  <HomePageContainer>
    <Profiler
      id="Menu"
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}
    >
      <Menu />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
