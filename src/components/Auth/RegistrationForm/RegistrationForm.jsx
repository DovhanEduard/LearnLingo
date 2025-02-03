import { useForm, Controller } from 'react-hook-form';
import css from './RegistrationForm.module.css';
import { Input } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be at most 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .required('Name is required'),

    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  //   console.log(watch('name'));

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.loginFormTitile}>Registration</h2>

      <p className={css.loginFormDesc}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <input className={css.input} placeholder="Name" {...register('name')} />

      {errors.name && <p className={css.error}>{errors.name.message}</p>}

      <input className={css.input} placeholder="Email" {...register('email')} />

      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <Controller
        name="password"
        control={control}
        placeholder="Password"
        render={({ field }) => (
          <Input.Password
            className={css.input}
            placeholder="Password"
            variant="borderless"
            {...field}
          />
        )}
      />

      {errors.password && (
        <p className={css.error}>{errors.password.message}</p>
      )}

      <button className={css.loginFormBtn} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
