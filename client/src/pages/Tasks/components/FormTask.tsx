import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Task } from '../../../models/task';
import validationSchema from '../validations/validationSchemaTasks';
import CustomField from '../../../components/CustomField';
import SelectCustomField from '../../../components/SelectCustomField';

interface FormTaskProps {
  buttonFunction: (values: Task) => void;
  initialTask: Task;
}

function FormTask({ buttonFunction, initialTask }: FormTaskProps) {
  const options = [
    { value: '', label: 'Choose status' },
    { value: 'Pending', label: 'Pending' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Completed', label: 'Completed' },
  ];
  return (
    <Formik
      initialValues={initialTask}
      validationSchema={validationSchema}
      onSubmit={buttonFunction}
    >
      {({ isValid }) => (
        <Form>
          <CustomField type="text" name="title" label="title" />
          <CustomField type="text" name="description" label="description" />
          <CustomField type="date" name="due_date" label="Date due" />
          <CustomField type="number" name="priority" label="priority" />
          {/* <label>
            status
            <Field as="select" id="status" name="status">
              <option value="">Choose status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Field>
            <ErrorMessage name="status" component="p" />
          </label> */}
          <SelectCustomField
            name="status"
            label="status"
            isLoading={false}
            isSuccess
            isError={undefined}
            options={options}
          />
          <button type="submit" disabled={!isValid}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormTask;
