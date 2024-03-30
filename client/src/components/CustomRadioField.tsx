import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

interface RadioProperties {
  title: string;
  controls: { value: string; label: string }[];
}

function CustomRadioField({ title, controls }: RadioProperties) {
  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ lineHeight: 0 }}>
        {title}
      </FormLabel>
      <RadioGroup row name="gender" sx={{ marginBottom: '12.5px' }}>
        {controls.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </>
  );
}

export default CustomRadioField;
