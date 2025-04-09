import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Collapse, Container, Form, InputGroup } from "react-bootstrap";
export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    return (
        <div className="position-fixed bottom-0 end-0 m-4">
            <Button variant="secondary" className="shadow p-2 d-inline-flex rounded-circle position-absolute bottom-0 end-0" onClick={() => setOpen(!open)}>
                <Image src={"/vault_icon.png"} width={40} height={40} alt="valt" style={{ objectFit: "contain" }} />
            </Button>
            <Collapse in={open}>
                <div style={{ width: 400 }}>
                    <Card className="shadow overflow-hidden" style={{ height: 600 }}>
                        <Card.Header className="d-flex align-items-center">
                            <Card.Title className="my-1 flex-grow-1">DeFi Assistant</Card.Title>
                            <Link href="/chat" className="btn text-secondary border-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                    />
                                </svg>
                            </Link>
                            <Button variant="close" onClick={() => setOpen(!open)} />
                        </Card.Header>
                        <Card.Body className="overflow-x-hidden overflow-y-auto h-100">
                            <div className="chatContent d-flex flex-column-reverse gap-2">
                                <div className="d-flex gap-2 align-items-end">
                                    <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                                    <div className="rounded-3 px-3 py-2 bg-light">
                                        Here are the changes: "NX Finance JLP Delta Neutral Vault →Snipe Trading "
                                    </div>
                                </div>
                                <div className="d-flex gap-2 align-items-end">
                                    <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">Ofc</div>
                                </div>
                                <div className="d-flex gap-2 align-items-end">
                                    <Image src={"/vault_icon.png"} width={24} height={20} alt="valt" className="flex-shirnk-0 mb-1" />
                                    <div className="rounded-3 px-3 py-2 bg-light">Changed! Would you like to see the changes?</div>
                                </div>
                                <div className="d-flex gap-2 align-items-end">
                                    <div className="rounded-3 px-3 py-2 bg-primary text-white ms-auto">
                                        Rename from NX Finance JLP Delta Neutral Vault to Snipe Trading
                                    </div>
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
                        <Card.Footer>
                            <InputGroup>
                                <Form.Control placeholder="Type to chat ..." />
                                <Button variant="primary">Send</Button>
                            </InputGroup>
                        </Card.Footer>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}
