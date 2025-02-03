import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const schema = Yup.object().shape({
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

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.loginFormTitile}>Log In</h2>

      <p className={css.loginFormDesc}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <input className={css.input} placeholder="Email" {...register('email')} />

      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <Controller
        name="password"
        control={control}
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
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
