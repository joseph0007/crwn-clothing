import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

// this is a higher order function(HOC) which means that this type of function takes a component and returns an improved component or a
// different component
const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
