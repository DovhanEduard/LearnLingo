import { useForm, Controller } from 'react-hook-form';
import css from './LoginForm.module.css';
import { Input } from 'antd';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.loginFormTitile}>Log In</h2>

      <p className={css.loginFormDesc}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <input className={css.input} placeholder="Email" {...register('email')} />

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

      {errors.exampleRequired && <span>This field is required</span>}

      <button className={css.loginFormBtn} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
