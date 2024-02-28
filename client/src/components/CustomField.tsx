import { TextField, Typography } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

interface CustomFieldProps {
  type: 'text' | 'date';
  name: string;
  label: string;
}

function CustomField({ name, label, type }: CustomFieldProps) {
  return (
    <>
      <Field
        type={type}
        id={name}
        name={name}
        as={TextField}
        label={label}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <Typography variant="body2" color="red" marginBottom="20px">
            {msg}
          </Typography>
        )}
      </ErrorMessage>
    </>
  );
}

export default CustomField;
