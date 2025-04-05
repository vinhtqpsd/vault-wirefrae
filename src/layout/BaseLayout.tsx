import { useRouter } from "next/router";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const BaseLayout: React.FC<Props> = ({ children, className }) => {
    return (
        <main className={className}>
            <Header />
            <div className="mainContent">{children}</div>
        </main>
    );
};

export default BaseLayout;
