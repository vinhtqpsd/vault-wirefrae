import Link from "next/link";
import { Container, Table } from "react-bootstrap";

export default function ListVault() {
    return (
        <Container className="py-5">
            <h1 className="pb-4">ListVault</h1>
            <Table bordered>
                <thead>
                    <tr>
                        <th>vault</th>
                        <th>TVL</th>
                        <th>Age</th>
                        <th>Vault's PnL</th>
                        <th>Your PnL</th>
                        <th>Your Deposit</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(6)].map((_, i) => (
                        <tr key={i}>
                            <td>
                                <div>
                                    <Link href={"/vault-detail/Vault-ABC"}>NX Finance JLP Delta Neutral Vaul</Link>
                                </div>
                                <div className="small text-secondary">
                                    Created by <span className="fw-medium">0x0000...0000</span>
                                </div>
                            </td>
                            <td>1.22M USDC</td>
                            <td>213 days</td>
                            {i == 4 ? (
                                <>
                                    <td>
                                        $180.5 <small className="text-danger">(-$3 last 24h)</small>
                                    </td>
                                    <td>
                                        <span className="text-success">+$18.3</span>
                                    </td>
                                    <td>$123</td>
                                </>
                            ) : (
                                <>
                                    <td>
                                        $180.5 <small className="text-success">(+$13 last 24h)</small>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
