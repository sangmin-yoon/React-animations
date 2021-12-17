import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 600px;
  height: 600px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-500, 500], [-360, 360]);
  const gradient = useTransform(
    x,
    [-500, 500],
    [
      "linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238))",
      "linear-gradient(135deg,rgb(0, 44, 238),rgb(0, 238, 226))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <BiggerBox>
        <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin></Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
