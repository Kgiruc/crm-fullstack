import { ErrorMessage, Field } from 'formik';
import {
  Typography,
  Select,
  MenuItem,
  Grid,
  CircularProgress,
  InputLabel,
} from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

interface SelectCustomFieldProps {
  name: string;
  label: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean | FetchBaseQueryError | SerializedError | undefined;
  options: { value: string; label: string }[];
}

function SelectCustomField({
  name,
  label,
  options,
  isError,
  isLoading,
  isSuccess,
}: SelectCustomFieldProps) {
  return (
    <>
      {isLoading && (
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Grid>
      )}
      {isError && (
        <Grid item xs={12}>
          <Typography variant="body1" color="error" align="center">
            Wystąpił Błąd
          </Typography>
        </Grid>
      )}
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {isSuccess && (
        <>
          <Field
            name={name}
            as={Select}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name={name}>
            {(msg) => (
              <Typography variant="body2" color="red" marginBottom="20px">
                {msg}
              </Typography>
            )}
          </ErrorMessage>
        </>
      )}
    </>
  );
}

export default SelectCustomField;
