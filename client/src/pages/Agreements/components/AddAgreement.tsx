import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Agreement } from '../../../models/agreement';
import { useAddAgreementMutation } from '../services/agreementsApi';
import FormAgreement from './FormAgreement';
import FormLayout from '../../../components/FormLayout';

function AddAgreement() {
  const navigate = useNavigate();
  const [addAgreement, { isError, isLoading }] = useAddAgreementMutation();

  const initialAgreement: Agreement = {
    id: '',
    customer_id: '',
    title: '',
    date_sign: new Date().toISOString().slice(0, 10),
    date_end: new Date().toISOString().slice(0, 10),
    value: 0,
    description: '',
  };

  const AddHanndler = async (values: Agreement) => {
    await addAgreement(values);
    navigate('/agreements');
  };
  return (
    <FormLayout isError={isError} isLoading={isLoading} login={false}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: '3vh',
          textTransform: 'uppercase',
          width: '100%',
        }}
      >
        Add Agreement
      </Typography>
      <FormAgreement
        buttonFunction={AddHanndler}
        initialAgreement={initialAgreement}
      />
    </FormLayout>
  );
}

export default AddAgreement;
