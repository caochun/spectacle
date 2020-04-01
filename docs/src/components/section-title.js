import styled from 'styled-components';

export const SectionTitle = styled.h2`
  color: #4e4e4e;
  font-size: 2.5rem;
  flex: auto;
  line-height: 1.3;
  margin: 4rem 0;
  width: 100%;
  text-align: center;
  @media ${p => p.theme.media.sm} {
    margin: 2rem 0 ${({ compact }) => (compact ? '2rem' : '6rem')};
  }
`;
