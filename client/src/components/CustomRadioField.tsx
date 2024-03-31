/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

interface RadioProperties {
  title: string;
  controls: { value: string; label: string }[];
}

function CustomRadioField({ title, controls }: RadioProperties) {
  return (
    <>
      <Field name={title}>
        {({ field }: any) => (
          <RadioGroup {...field} row sx={{ marginBottom: 2, height: '56px' }}>
            {controls.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      </Field>
      <ErrorMessage name={title}>
        {(msg) => (
          <Typography variant="body2" color="red" marginBottom="20px">
            {msg}
          </Typography>
        )}
      </ErrorMessage>
    </>
  );
}

export default CustomRadioField;
