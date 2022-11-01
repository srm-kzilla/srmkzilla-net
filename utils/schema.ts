import * as yup from 'yup'

export const registerValidationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(5, 'Username too short')
    .required('This is a required field'),
  email: yup
    .string()
    .trim()
    .email('Invalid email')
    .required('This is a required field'),
  registrationNumber: yup.string().trim(),
  phoneNumber: yup
    .string()
    .trim()
    .length(10, 'Invalid mobile number')
    .required('This is a required field'),
  department: yup
    .string()
    .trim()
    .required('This is a required field')
    .oneOf(['DSBS', 'CINTEL', 'CTECH', 'NWC', 'Not in CSE']),
})
export type registerFormData = Partial<
  yup.InferType<typeof registerValidationSchema>
>
