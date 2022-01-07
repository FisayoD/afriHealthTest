import React from "react";
import Link from "./Link";
import githubIcon from "../assets/img/github-icon.svg";

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>© 2020 GitHub, Inc.</li>

                    <li>
                        <Link hrefVal="https://docs.github.com/en/github/site-policy/github-terms-of-service" btnValue="Terms" />
                    </li>

                    <li>
                        <Link hrefVal="https://docs.github.com/en/github/site-policy/github-privacy-statement" btnValue="Privacy" />
                    </li>

                    <li>
                        <Link hrefVal="https://github.com/security" btnValue="Security" />
                    </li>

                    <li>
                        <Link hrefVal="https://www.githubstatus.com/" btnValue="Status" />
                    </li>

                    <li>
                        <Link hrefVal="" btnValue="Help" />
                    </li>

                    <li>
                        <Link hrefVal="https://github.com/">
                            <img src={githubIcon} />
                        </Link>
                    </li>

                    <li>
                        <Link hrefVal="https://support.github.com/?tags=dotcom-footer" btnValue="Contact GitHub" />
                    </li>

                    <li>
                        <Link hrefVal="https://github.com/pricing" btnValue="Pricing" />
                    </li>

                    <li>
                        <Link hrefVal="https://docs.github.com/" btnValue="API" />
                    </li>

                    <li>
                        <Link hrefVal="https://services.github.com/" btnValue="Training" />
                    </li>

                    <li>
                        <Link hrefVal="https://github.blog/" btnValue="Blog" />
                    </li>

                    <li>
                        <Link hrefVal="https://github.com/about" btnValue="About" />
                    </li>
                </ul>
            </footer>
        );
    }
}
