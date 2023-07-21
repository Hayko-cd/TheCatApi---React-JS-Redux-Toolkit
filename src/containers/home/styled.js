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
  
  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-inline: 60px;
  }
`;

export const HomeSideBarBlock = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 30%;
  height: max-content;
  border-right: 1px solid ${COLORS.green};
  border-top: 1px solid ${COLORS.green};
  border-bottom: 1px solid ${COLORS.green};
  border-radius: 0 4px 4px 0;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    border-bottom: unset;
    border-left: 1px solid ${COLORS.green};
  }
`;

export const HomeSideBarCategoryName = styled.span`
  ${DEFAULT_FONT};
  font-size: 24px;
  color: ${COLORS.green};
  text-transform: capitalize;
  cursor: pointer;
  
  @media only screen and (max-width: 1920px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 1280px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 428px) {
    font-size: 16px;
  }
`;

export const HomeSideBarCategory = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid ${COLORS.green};
  transition: 0.2s;
  transition-timing-function: linear;
  transition-duration: 0.3s;
  
  &:hover {
    background: ${COLORS.green};
  }
  &:hover ${HomeSideBarCategoryName} {
    color: ${COLORS.white};
  }
  
  @media only screen and (max-width: 1920px) {
    height: 40px;  
  }

  @media only screen and (max-width: 1280px) {
    height: 30px;
  }
`;

export const HomeElementWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 70%;
  min-height: 600px;
  border-left: 1px solid ${COLORS.green};
  border-top: 1px solid ${COLORS.green};
  border-bottom: 1px solid ${COLORS.green};
  border-radius: 4px 0 0 4px;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    justify-content: center;
    border: 1px solid ${COLORS.green};
  }
`;

export const HomeElementEveryBlock = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  border: 1px solid ${COLORS.green};

  @media only screen and (max-width: 1920px) {
    width: 300px;
    height: 200px;
  }

  @media only screen and (max-width: 1280px) {
    width: 250px;
    height: 150px;
  }
`;

export const HomeElementEveryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;

  @media only screen and (max-width: 1920px) {
    height: 150px;
  }

  @media only screen and (max-width: 1280px) {
    height: 100px;
  }
`;

export const LoadMoreButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
`;


export const LoadMoreButton = styled.button`
  width: 180px;
  height: 40px;
  background: red;
  outline: none;
  border: 1px solid ${COLORS.green};
  border-radius: 4px;
  color: ${COLORS.white};
  cursor: pointer;
`;
