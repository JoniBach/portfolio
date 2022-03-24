import { Nav } from 'components/nav';
type Props = {
  children?: any;
};
export const Main: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Main;
