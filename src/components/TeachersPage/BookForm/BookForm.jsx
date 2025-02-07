import css from './BookForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const BookForm = ({ avatar, name, surname, handleBook }) => {
  const schema = Yup.object().shape({
    reason: Yup.string().required('Please select an option'),
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
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      reason: '123',
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  watch('reason');

  const onSubmit = () => {
    toast.success('You’ve successfully booked your lesson.', {
      id: 'uniqueBookToast',
      duration: 3000,
      position: 'bottom-left',
      style: {
        border: 'none',
        padding: '12px',
        color: '#fff',
        backgroundColor: '#9fbaae',
        borderRadius: 12,
        height: 48,
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1,
      },
    });

    handleBook();
  };

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
            {...register('reason')}
            onChange={() => setValue('reason', 'Career and business')}
            className={css.radioBtn}
          />
          <span>Career and business</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Lesson for kids"
            {...register('reason')}
            onChange={() => setValue('reason', 'Lesson for kids')}
            className={css.radioBtn}
          />
          <span>Lesson for kids</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Living abroad"
            {...register('reason')}
            onChange={() => setValue('reason', 'Living abroad')}
            className={css.radioBtn}
          />
          <span>Living abroad</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Exams and coursework"
            {...register('reason')}
            onChange={() => setValue('reason', 'Exams and coursework')}
            className={css.radioBtn}
          />
          <span>Exams and coursework</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            value="Culture, travel or hobby"
            onChange={() => setValue('reason', 'Culture, travel or hobby')}
            {...register('reason')}
            className={css.radioBtn}
          />
          <span>Culture, travel or hobby</span>
        </label>
        {errors.reason && <p className={css.error}>{errors.reason.message}</p>}
      </div>

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

      <Toaster />
    </form>
  );
};

export default BookForm;
