import ChatBox from "@/app-pages/chat/ChatBox";
import BaseLayout from "@/layout/BaseLayout";
import { Breadcrumb, Container } from "react-bootstrap";
export default function ChatPage() {
    return (
        <BaseLayout>
            <Container className="pt-5">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>DeFi Assistant</Breadcrumb.Item>
                </Breadcrumb>
                <section>
                    <h1 className="mb-4">DeFi Assistant</h1>
                    <ChatBox />
                </section>
            </Container>
        </BaseLayout>
    );
}
