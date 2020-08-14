import styled from 'styled-components/macro';
import StatusBadge from '../../components/StatusBadge';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background: #fcfbfc;
  box-shadow: 0px 20px 100px 10px rgba(0, 0, 0, 0.12);
  border-radius: 1.25rem;
`;

export const CardHeader = styled.div`
  background: #f6f4f6;
  padding: 1.875rem 2.25rem 2.5rem 2.25rem;
  border-radius: 1.25rem 1.25rem 0 0;
  color: var(--gray-900);

  @media screen and (max-width: 648px) {
    text-align: center;
  }

  > h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  & ${StatusBadge} {
    background: #f6f4f6;
  }
`;

export const StatusText = styled.span`
  display: flex;
  align-items: center;

  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: -0.02em;
  vertical-align: middle;

  color: #959596;
`;

export const StatusList = styled.div`
  display: inline-flex;

  & > div {
    margin-right: 0.75rem;
  }

  & > ${StatusText} {
    margin-right: 1rem;

    &:last-child {
      margin-left: 0.25rem;
    }
  }

  & > ${StatusBadge} {
    @media screen and (max-width: 648px) {
      margin-left: -1.8rem;

      &:nth-of-type(1) {
        margin-left: 0rem;
      }
    }
  }
`;

export const CardContent = styled.div`
  padding: 2.3125rem;
  background: #fcfbfc;
  height: 100%;
  position: relative;

  > textarea {
    background: transparent;
    resize: none;
    border: 0 none;
    width: 100%;
    outline: none;
    height: 100%;

    color: var(--gray-900);

    &::placeholder {
      color: var(--gray-400);
    }

    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.81rem;
    letter-spacing: -0.02em;
  }
`;

export const CardDate = styled.span`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: -0.02em;
`;

export const CardFooter = styled.div`
  display: flex;
  height: 85px;
  justify-content: space-between;
  position: relative;

  padding: 1rem 2.3125rem 1.6875rem 2.3125rem;
  border: 0px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 2.3125rem;
    left: 2.3125rem;
    border-top: 0.5px solid #e1dcdc;
  }

  > ${CardDate} {
    color: var(--gray-400);
  }
`;
