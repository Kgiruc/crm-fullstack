import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Field } from 'formik';

interface RadioProperties {
  title: string;
  controls: { value: string; label: string }[];
}

function CustomRadioField({ title, controls }: RadioProperties) {
  return (
    <Field name={title}>
      {({ field }: any) => (
        <RadioGroup {...field}>
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
  );
}

export default CustomRadioField;
