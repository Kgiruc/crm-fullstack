import { Box, Container } from '@mui/material';
import { Form, Formik } from 'formik';
import { Outbound } from '../../../../models/Outbound';
import CustomField from '../../../../components/CustomField';
import validationSchema from '../validations/formValidationsOutbound';

interface FormOutboundProps {
  buttonFunction: (values: Outbound) => void;
  initialOutbound: Outbound;
}

function FormOutbound({ buttonFunction, initialOutbound }: FormOutboundProps) {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 3,
        }}
      >
        <Formik
          initialValues={initialOutbound}
          validationSchema={validationSchema}
          onSubmit={buttonFunction}
        >
          {({ isValid }) => (
            <Form style={{ width: '100%', marginTop: 3 }}>
              <CustomField type="text" name="wz_number" label="Wz Nr." />
              <CustomField
                type="date"
                name="delivery_date"
                label="data dostawy"
              />
              <CustomField
                type="text"
                name="from_company"
                label="from_company"
              />
              <CustomField type="text" name="from_street" label="from_street" />
              <CustomField
                type="text"
                name="from_postal_code"
                label="from_postal_code"
              />
              <CustomField type="text" name="from_city" label="from_city" />
              <CustomField type="text" name="to_company" label="to_company" />
              <CustomField type="text" name="to_street" label="to_street" />
              <CustomField
                type="text"
                name="to_postal_code"
                label="to_postal_code"
              />
              <CustomField type="text" name="to_city" label="to_city" />
              <CustomField
                type="text"
                name="receiving_person"
                label="receiving_person"
              />
              <CustomField
                type="text"
                name="receiving_person_phone"
                label="receiving_person_phone"
              />
              <CustomField
                type="text"
                name="receiving_person_email"
                label="receiving_person_email"
              />
              <CustomField type="text" name="remarks" label="remarks" />
              <button type="submit" disabled={!isValid}>
                Add Outbound
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default FormOutbound;
