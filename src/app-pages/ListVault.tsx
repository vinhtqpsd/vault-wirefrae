import Link from "next/link";
import { Container, Form, Table } from "react-bootstrap";

export default function ListVault() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center pb-4">
                <h1 className="mb-0">ListVault</h1>
                <div>
                    <Form.Control type="search" placeholder="search by name..." />
                </div>
            </div>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>vault</th>
                        <th>Network</th>
                        <th>Protocol</th>
                        <th>TVL</th>
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
                            <td>BSC</td>
                            <td>HyperLiquid</td>
                            <td>1.22M USDC</td>
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
        </>
    );
}
