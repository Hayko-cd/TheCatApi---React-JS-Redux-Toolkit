import styled from "styled-components";
import {COLORS} from "utils/colors";
import {DEFAULT_FONT} from "utils/constants";

export const HomeWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-inline: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  min-height: 600px;
  height: auto;
  background: ${COLORS.white};
  box-sizing: border-box;
`;

export const HomeSideBarBlock = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 30%;
  height: 600px;
  border-right: 1px solid ${COLORS.green};
  border-top: 1px solid ${COLORS.green};
  border-bottom: 1px solid ${COLORS.green};
  border-radius: 4px;
`;

export const HomeSideBarCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background: brown;
`;

export const HomeSideBarCategoryName = styled.span`
  ${DEFAULT_FONT};
  font-size: 22px;
  color: white;
`;

export const HomeElementWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 70%;
  height: 600px;
  border-left: 1px solid ${COLORS.green};
  border-top: 1px solid ${COLORS.green};
  border-bottom: 1px solid ${COLORS.green};
  border-radius: 4px;
`;

export const HomeElementEveryBlock = styled.div`
  width: 300px;
  height: 200px;
  background: red;
`;

