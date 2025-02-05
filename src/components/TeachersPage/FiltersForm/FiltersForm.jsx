import { useEffect } from 'react';
import css from './FiltersForm.module.css';
import { useForm, Controller } from 'react-hook-form';

const FiltersForm = () => {
  const { control, watch } = useForm({
    defaultValues: {
      language: 'French',
      level: 'A1 Beginner',
      price: '30 $',
    },
  });

  // Спостерігаємо за всіма полями
  const watchedValues = watch();

  // Виводимо значення в консоль при кожній зміні
  // useEffect(() => {
  //   console.log('Current values:', watchedValues);
  // }, [watchedValues]);

  return (
    <form className={css.filtersForm}>
      {/* Language Dropdown */}
      <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <div className={css.dropdownWrapper}>
            <label className={css.dropdownLabel}>Languages</label>
            <select className={css.dropdown} {...field}>
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        )}
      />

      {/* Level Dropdown */}
      <Controller
        name="level"
        control={control}
        render={({ field }) => (
          <div className={css.dropdownWrapper}>
            <label className={css.dropdownLabel}>Level of knowledge</label>
            <select className={css.dropdown} {...field}>
              <option value="A1 Beginner">A1 Beginner</option>
              <option value="A2 Elementary">A2 Elementary</option>
              <option value="B1 Intermediate">B1 Intermediate</option>
              <option value="B2 Upper-Intermediate">
                B2 Upper-Intermediate
              </option>
            </select>
          </div>
        )}
      />

      {/* Price Dropdown */}
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <div className={css.dropdownWrapper}>
            <label className={css.dropdownLabel}>Price</label>
            <select className={css.dropdown} {...field}>
              <option value="10 $">10 $</option>
              <option value="20 $">20 $</option>
              <option value="30 $">30 $</option>
              <option value="40 $">40 $</option>
            </select>
          </div>
        )}
      />
    </form>
  );
};

export default FiltersForm;
