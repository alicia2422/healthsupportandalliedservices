import styled from "styled-components";
import { Triangle } from "react-loader-spinner";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#16a085"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};
export default App;
