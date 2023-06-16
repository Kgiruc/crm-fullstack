import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Task } from '../../../models/task';
import validationSchema from '../validations/validationSchemaTasks';

interface FormTaskProps {
  buttonFunction: (values: Task) => void;
  initialTask: Task;
}

function FormTask({ buttonFunction, initialTask }: FormTaskProps) {
  return (
    <Formik
      initialValues={initialTask}
      validationSchema={validationSchema}
      onSubmit={buttonFunction}
    >
      {({ isValid }) => (
        <Form>
          <label>
            title
            <Field type="title" id="title" name="title" />
            <ErrorMessage name="title" component="p" />
          </label>
          <label>
            Description
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" component="p" />
          </label>
          <label>
            Date due
            <Field type="date" id="due_date" name="due_date" />
            <ErrorMessage name="due_date" component="p" />
          </label>
          <label>
            priority
            <Field type="number" id="priority" name="priority" />
            <ErrorMessage name="priority" component="p" />
          </label>
          <label>
            status
            <Field as="select" id="status" name="status">
              <option value="">Choose status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Field>
            <ErrorMessage name="status" component="p" />
          </label>
          <button type="submit" disabled={!isValid}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormTask;
