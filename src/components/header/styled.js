import styled from "styled-components";
import {COLORS} from "utils/colors";
import {DEFAULT_FONT} from "../../utils/constants";

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 60px;
  background: ${COLORS.green};
  padding-inline: 40px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const WebsiteName = styled.span`
  font-size: 22px;
  color: ${COLORS.white};
  text-transform: capitalize;
  ${DEFAULT_FONT};
`;

