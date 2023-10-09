import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Container = styled.section`
  max-width: 1280px;
  min-height: 80vh;
  margin: 100px auto;
  padding: 0 20px;
`;

export const Subject = styled.h2`
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: bold;
`;

export const Wrapper = styled.div``;

export const Title = styled.h3`
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
  color: ${color.primary};
`;

export const SaleBox = styled.div`
  padding-bottom: 28px;
`;

export const Sale = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ConcertBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;

export const Concert = styled.li`
  width: 288px;
  padding: 12px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  cursor: pointer;
`;

export const ConcertTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
`;

export const ConcertDate = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ConcertSales = styled.p`
  margin-bottom: 4px;
`;

export const ConcertSalesRate = styled.p``;
