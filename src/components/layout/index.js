import {Header} from "components/header";

export const MainWebsiteLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}