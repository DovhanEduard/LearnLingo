import { useForm } from 'react-hook-form';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <h2 className={css.loginFormTitile}>Log In</h2>

      <p className={css.loginFormDesc}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <input className={css.input} placeholder="Email" {...register('email')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className={css.input}
        placeholder="Password"
        {...register('password')}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <button className={css.loginFormBtn} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
