import styled from 'styled-components';

const LoginInput = ({
  type,
  id,
  label,
  placeholder,
  name,
  onChange,
  ...props
}) => {
  return (
    <div {...props}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginInput;

const Input = styled.input`
  box-sizing: border-box;
  width: 250px;
  height: 35px;
  background-color: transparent;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  font-size: 15px;
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;
