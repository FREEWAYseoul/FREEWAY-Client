import styled from 'styled-components';

type PageTitleProps = {
  upperLine: string;
  lowerLine: string;
};

const PageTitle = ({ upperLine, lowerLine }: PageTitleProps) => {
  return (
    <>
      <Text>{upperLine}</Text>
      <Text>{lowerLine}</Text>
    </>
  );
};

export default PageTitle;

// export const TitleWrapper = styled.div`
//   height: 65px;
// `;

export const Text = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 10px;
`;
