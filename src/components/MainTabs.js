import React from "react";
import Link from "./Link";

export default class MainTabs extends React.Component {
    render() {
        return (
            <div className="secondaryNav">
                <div className="container flex">
                    <div className="buffer"></div>
                    <div className="mainTab">
                    <Link hrefVal="https://github.com/FisayoD?tab=repositories" cssClasses={["active-tab"]} btnValue="Overview" />

                    <Link hrefVal="https://github.com/FisayoD?tab=projects&type=beta" btnValue="Repositories">
                        <span>17</span>
                    </Link>

                    <Link hrefVal="https://github.com/FisayoD?tab=projects&type=beta" btnValue="Projects">   
                    </Link>

                    <Link hrefVal="https://github.com/FisayoD?tab=packages" btnValue="Packages">
                    </Link>
                            
                    <Link hrefVal="https://github.com/FisayoD?tab=stars" btnValue="Stars">
                    </Link>

                    </div>
                </div>
           </div>
        );
    }
}
