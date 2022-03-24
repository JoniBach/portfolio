import styled from 'styled-components';
import { motion } from 'framer-motion';
type Props = {
  rotate?: any;
  children?: any;
};
const Container = styled(motion.div)``;

export const Nav: React.FC<Props> = () => {
  return <Container>nav</Container>;
};
