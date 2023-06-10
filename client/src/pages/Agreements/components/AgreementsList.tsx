import { Agreement } from "../../../models/agreement"

type Props = {
    agreements: Agreement[]
}

function AgreementsList({ agreements }: Props) {
  return (
    <tbody>
        {agreements.map((agreement) => (
            <tr key={agreement.id}>
                <td>{agreement.name}</td>
                <td>{agreement.date_sign}</td>
                <td>{agreement.date_end}</td>
                <td>{agreement.value}</td>

            </tr>
        ))}
    </tbody>
  )
}

export default AgreementsList