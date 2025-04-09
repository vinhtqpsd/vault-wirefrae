import ChatBox from "@/app-pages/chat/ChatBox";
import BaseLayout from "@/layout/BaseLayout";
import { Breadcrumb, Container } from "react-bootstrap";
export default function ChatPage() {
    return (
        <BaseLayout>
            <Container className="py-5">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>DeFi Assistant</Breadcrumb.Item>
                </Breadcrumb>
                <section className="pb-5">
                    <h1>DeFi Assistant</h1>
                    <ChatBox />
                </section>
            </Container>
        </BaseLayout>
    );
}
