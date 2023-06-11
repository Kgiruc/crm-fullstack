import { Link } from "react-router-dom";
import { useAgreementsQuery } from "./services/agreementsApi";
import AgreementsList from "./components/AgreementsList";

function Agreements() {
  const { data, error, isLoading, isSuccess, isFetching } = useAgreementsQuery();
  return <section>
  <h1>All Agreements</h1>
  {isLoading && <p>loading...</p>}
  {isFetching && <p>fetching</p>}
  {error && <p>error</p>}
  {isSuccess && (
    <>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Agreement</th>
            <th>date sign</th>
            <th>date end</th>
            <th>value</th>
            <th>description</th>
          </tr>
        </thead>
        <AgreementsList agreements={data} />
      </table>
      <Link to="/agreements/add">Add Agreement</Link>
    </>
  )}
</section>;
}

export default Agreements;
