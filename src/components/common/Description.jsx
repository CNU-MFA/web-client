import styled from 'styled-components';

const Description = ({ text, ...props }) => {
  return <Text {...props}>{text}</Text>;
};

export default Description;

const Text = styled.p`
  white-space: pre-wrap;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
`;
