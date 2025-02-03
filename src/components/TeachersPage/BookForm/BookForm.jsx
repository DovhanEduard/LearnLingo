import css from './BookForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const BookForm = ({ avatar, name, surname }) => {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Full name must be at least 2 characters')
      .max(50, 'Full name must be at most 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces')
      .required('Full name is required'),

    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    phoneNumber: Yup.string()
      .matches(
        /^\+380\d{9}$/,
        'Phone number must start with +380 and contain 9 digits'
      )
      .required('Phone number is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.formTitile}>Book trial lesson</h2>

      <p className={css.formDesc}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={css.avatarWrapper}>
        <img className={css.teacherAvatar} src={avatar} alt="Teacher avatar" />

        <div>
          <p className={css.avatarTitle}>Your teacher</p>
          <p className={css.teacherName}>
            {name} {surname}
          </p>
        </div>
      </div>

      <div className={css.radioBtnWrapper}>
        <h2 className={css.radioBtnTitile}>
          What is your main reason for learning English?
        </h2>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Career and business"
            {...register('reason', { required: 'Please select an option' })}
            className={css.radioBtn}
          />
          <span>Career and business</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Lesson for kids"
            {...register('reason', { required: 'Please select an option' })}
            className={css.radioBtn}
          />
          <span>Lesson for kids</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Living abroad"
            {...register('reason', { required: 'Please select an option' })}
            className={css.radioBtn}
          />
          <span>Living abroad</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Exams and coursework"
            {...register('reason', { required: 'Please select an option' })}
            className={css.radioBtn}
          />
          <span>Exams and coursework</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Culture, travel or hobby"
            {...register('reason', { required: 'Please select an option' })}
            className={css.radioBtn}
          />
          <span>Culture, travel or hobby</span>
        </label>
      </div>

      {errors.choice && <p className={css.error}>{errors.choice.message}</p>}

      <input
        className={css.input}
        placeholder="Full Name"
        {...register('fullName')}
      />

      {errors.fullName && (
        <p className={css.error}>{errors.fullName.message}</p>
      )}

      <input className={css.input} placeholder="Email" {...register('email')} />

      {errors.email && <p className={css.error}>{errors.email.message}</p>}

      <input
        className={css.input}
        placeholder="Phone number"
        {...register('phoneNumber')}
      />

      {errors.phoneNumber && (
        <p className={css.error}>{errors.phoneNumber.message}</p>
      )}

      <button className={css.formBtn} type="submit">
        Book
      </button>
    </form>
  );
};

export default BookForm;
