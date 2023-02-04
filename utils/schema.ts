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
    .oneOf(['CTECH', 'NWC', 'CINTEL', 'DSBS', 'Others'], 'Invalid Option')
    .required('This is a required field'),
})
export type registerFormData = Partial<
  yup.InferType<typeof registerValidationSchema>
>
