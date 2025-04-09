import Image from "next/image";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
export default function ChatBox() {
    return (
        <Card className="chatBox overflow-hidden shadow-sm rounded-4" style={{ height: "calc(100dvh - 240px)" }}>
            <Card.Body className="overflow-x-hidden overflow-y-auto h-100">
                <div className="chatContent d-flex flex-column-reverse gap-2">
                    <div className="d-flex gap-2 align-items-end">
                        <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                        <div className="rounded-3 px-3 py-2 bg-light">Here are the changes: "NX Finance JLP Delta Neutral Vault →Snipe Trading "</div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Ofc</div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                        <div className="rounded-3 px-3 py-2 bg-light">Changed! Would you like to see the changes?</div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Rename from NX Finance JLP Delta Neutral Vault to Snipe Trading</div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                        <div className="rounded-3 px-3 py-2 bg-light">
                            <p>You have two Vaults named “NX Finance”, what's the Vault you want to update?</p>
                            <p>Just choose one and I will help you:</p>
                            <ul>
                                <li>NX Finance JLP Delta Neutral Vault </li>
                                <li>NX Finance Vault</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">I just wanna update “NX Finance” Vault </div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                        <div className="rounded-3 px-3 py-2 bg-light">Hello there, what can I help you?</div>
                    </div>
                    <div className="d-flex gap-2 align-items-end">
                        <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Hi bro!!!</div>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="py-3">
                <InputGroup>
                    <Form.Control placeholder="Type to chat ..." />
                    <Button variant="primary">Send</Button>
                </InputGroup>
            </Card.Footer>
        </Card>
    );
}
