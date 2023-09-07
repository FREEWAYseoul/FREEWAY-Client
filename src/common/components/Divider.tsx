import styled from 'styled-components';

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;

const StyledDivider = styled.hr`
  margin: 0;
  width: 100%;
  height: 1px;

  background: #d9d9d9;
  opacity: 0.2;
`;
