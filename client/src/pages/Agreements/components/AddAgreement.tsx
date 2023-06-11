import { useNavigate } from "react-router-dom";
import { Agreement } from "../../../models/agreement";
import { useAddAgreementMutation } from "../services/agreementsApi"
import FormAgreement from "./FormAgreement";

function AddAgreement() {
    const navigate = useNavigate();
    const [addAgreement] = useAddAgreementMutation();

    const initialAgreement: Agreement = {
        customer_id: '',
        name: '',
        date_sign: new Date,
        date_end: new Date,
        value: 0,
        description: '',
    }

    const AddHanndler = async (values: Agreement) => {
      await addAgreement(values);
      navigate('/agreements');
    }
  return (
    <section>
      <FormAgreement buttonFunction={AddHanndler} initialAgreement={initialAgreement}/>
    </section>
  )
}

export default AddAgreement