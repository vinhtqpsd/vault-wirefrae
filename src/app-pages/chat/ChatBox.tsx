import Image from "next/image";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
export default function ChatBox() {
    return (
        <div className="chatBox">
            <div className="chatContent d-flex flex-column gap-2">
                <div className="d-flex gap-2 align-items-end">
                    <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Hi bro!!!</div>
                </div>
                <div className="d-flex gap-2 align-items-end">
                    <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                    <div className="rounded-3 px-3 py-2 bg-light">Hello there, what can I help you?</div>
                </div>
                <div className="d-flex gap-2 align-items-end">
                    <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">I just wanna update “NX Finance” Vault </div>
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
                    <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Rename from NX Finance JLP Delta Neutral Vault to Snipe Trading</div>
                </div>
                <div className="d-flex gap-2 align-items-end">
                    <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                    <div className="rounded-3 px-3 py-2 bg-light">Changed! Would you like to see the changes?</div>
                </div>
                <div className="d-flex gap-2 align-items-end">
                    <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Ofc</div>
                </div>
                <div className="d-flex gap-2 align-items-end">
                    <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                    <div className="rounded-3 px-3 py-2 bg-light">Here are the changes: "NX Finance JLP Delta Neutral Vault →Snipe Trading "</div>
                </div>
            </div>
            <div className="position-fixed w-100 bottom-0 start-0 bg-body shadow p-3 border-top border-light">
                <Container>
                    <div className="">
                        <InputGroup>
                            <Form.Control placeholder="Type to chat ..." />
                            <Button variant="primary">Send</Button>
                        </InputGroup>
                    </div>
                </Container>
            </div>
        </div>
    );
}
