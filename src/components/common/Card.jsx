import styled from 'styled-components';

const Card = ({ size, title, children, ...props }) => {
  return (
    <Layout size={size} {...props}>
      <Title>{title}</Title>
      {children}
    </Layout>
  );
};

export default Card;

const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: ${({ size }) => size}px;
  padding: 20px;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h1`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 10px;
`;
