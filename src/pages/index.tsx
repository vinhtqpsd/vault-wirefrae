import ListVault from "@/app-pages/ListVault";
import BaseLayout from "@/layout/BaseLayout";
import Image from "next/image";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
export default function Home() {
    return (
        <BaseLayout>
            <Container className="py-5">
                <section className="py-5">
                    <div className="text-center">
                        <div className="mb-3">
                            <Image src={"/vault_icon.png"} width={64} height={53} alt="valt" />
                        </div>
                        <h1>I'm Terminal, your AI-powered DeFi assistant</h1>
                        <p className="mb-4">Type a message to start chatting with the AI Agent.</p>
                        <div className="col-md-6 mx-auto">
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Type to chat ..." />
                                <Button variant="outline-secondary" onClick={() => {}}>
                                    Send
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <ListVault />
                </section>
            </Container>
        </BaseLayout>
    );
}
