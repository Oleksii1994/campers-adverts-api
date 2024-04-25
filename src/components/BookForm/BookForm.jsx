import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { DatePicker } from 'components/DatePickr/DatePickr';

import { FormContainer, FormHeading, FormTitle } from './BookForm.styled';
import { MoreBtn } from 'components/ShowMoreBtn/ShowMoreBtn.styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  booking_date: '',
  comment: '',
};

export const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    booking_date: Yup.string().required('Booking date is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (values.name && values.email && values.booking_date) {
      console.log(values);
      resetForm();
    }
  };

  return (
    <FormContainer>
      <FormHeading>
        <FormTitle>Book your campervan now</FormTitle>
        <p className="form-text">
          Stay connected! We are always ready to help you.
        </p>
      </FormHeading>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-group">
              <Field
                className={`input ${
                  errors.name && touched.name ? 'error-border' : ''
                }`}
                type="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <Field
                className={`input ${
                  errors.email && touched.email ? 'error-border' : ''
                }`}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <DatePicker
                name="booking_date"
                className={`input ${
                  errors.booking_date && touched.booking_date
                    ? 'error-border'
                    : ''
                }`}
              />
              <ErrorMessage
                name="booking_date"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <Field
                type="text"
                name="comment"
                className="input"
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="error-message"
              />
            </div>
            <MoreBtn type="submit" className="btn-submit">
              Send
            </MoreBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
