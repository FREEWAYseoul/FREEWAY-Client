import styled from 'styled-components';

const HomePageTitle = () => {
  return (
    <StyledHomePageTitleWrapper>
      <Title>엘리베이터가</Title>
      <Title>궁금한 지하철역은?</Title>
    </StyledHomePageTitleWrapper>
  );
};

export default HomePageTitle;

const StyledHomePageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;

  margin-top: 92px;
  padding-left: 4px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
`;
