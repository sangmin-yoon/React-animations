import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 50px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  height: 200px;
  width: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: white;
`;

const Switch = styled(motion.button)`
  color: rgb(20, 192, 135);
`;

const switchVariants: Variants = {
  click: { scale: 1.5, color: "rgb(43, 0, 255)" },
};

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [circleC, SetCircleC] = useState(false);
  const circleClicked = () => SetCircleC((prev) => !prev);
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        <Box
          whileHover={{
            boxShadow: "-30px -30px 0px 30px  rgba(255, 255, 255, 0.498)",
          }}
          onClick={() => setId("1")}
          layoutId="1"
        />
        <Box>{!circleC ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{circleC ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          whileHover={{
            boxShadow: "30px 30px 0px 30px  rgba(255, 255, 255, 0.498)",
          }}
          onClick={() => setId("2")}
          layoutId="2"
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
          >
            <Box
              layoutId={id}
              style={{
                width: "600px",
                height: "300px",
                backgroundColor: "white",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Switch
        variants={switchVariants}
        whileTap="click"
        onClick={circleClicked}
      >
        Switch
      </Switch>
    </Wrapper>
  );
}

export default App;
