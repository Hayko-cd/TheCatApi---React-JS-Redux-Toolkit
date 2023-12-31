import {useNavigate} from "react-router-dom";
import {Images} from "assets";
import {ROUTENAMES} from "routes/routes";
import {WEBSITE_NAME} from "utils/constants";
import {HeaderBlock, Logo, WebsiteName} from "components/header/styled";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderBlock>
            <Logo src={Images.catIcon} onClick={() => navigate(ROUTENAMES.home)} alt="Image will be loaded soon sorry"/>
            <WebsiteName>{WEBSITE_NAME}</WebsiteName>
        </HeaderBlock>
    )
}
