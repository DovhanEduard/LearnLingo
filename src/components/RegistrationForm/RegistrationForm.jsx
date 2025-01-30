import { useForm, Controller } from 'react-hook-form';
import css from './RegistrationForm.module.css';
import { Input } from 'antd';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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

      <input className={css.input} placeholder="Email" {...register('email')} />

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

      {errors.exampleRequired && <span>This field is required</span>}

      <button className={css.loginFormBtn} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
