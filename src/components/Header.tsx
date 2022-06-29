import { Link } from "react-router-dom";
import LoginLogo from "../assets/logo_sesc.png";

interface HeaderProps {
    heading: string;
    paragraph: string;
    linkUrl: string;
    linkName: string;
}

export default function Header(props: HeaderProps) {
    return (
        <>
            <div className="justify-center pt-1 pb-2">
                <img src={LoginLogo} alt="" className="h-40 w-100"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {props.heading}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-5">
                {props.paragraph} {' '}
            <Link to={props.linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {props.linkName}
            </Link>
            </p>            
        </>
    );
}