import styled from 'styled-components';

const Description = ({ text, ...props }) => {
  return (
    <Layout {...props}>
      <Text>{text}</Text>
    </Layout>
  );
};

export default Description;

const Layout = styled.div`
  margin: 30px;
`;

const Text = styled.p`
  white-space: pre-wrap;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
`;
