// import { useEffect } from 'react';
import css from './FiltersForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { Select } from 'antd';

const FiltersForm = () => {
  const { control } = useForm({
    defaultValues: {
      language: 'French',
      level: 'A1 Beginner',
      price: '30 $',
    },
  });

  // const watchedValues = watch();

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
            <Select
              {...field}
              className={css.dropdown}
              popupClassName={css.popUp}
              variant="borderless"
              options={[
                {
                  value: 'French',
                  label: 'French',
                },
                {
                  value: 'English',
                  label: 'English',
                },
                {
                  value: 'German',
                  label: 'German',
                },
                {
                  value: 'Ukrainian',
                  label: 'Ukrainian',
                },
                {
                  value: 'Polish',
                  label: 'Polish',
                },
              ]}
            />
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
            <Select
              {...field}
              className={css.dropdown}
              popupClassName={css.popUp}
              variant="borderless"
              options={[
                {
                  value: 'A1 Beginner',
                  label: 'A1 Beginner',
                },
                {
                  value: 'A2 Elementary',
                  label: 'A2 Elementary',
                },
                {
                  value: 'B1 Intermediate',
                  label: 'B1 Intermediate',
                },
                {
                  value: 'B2 Upper-Intermediate',
                  label: 'B2 Upper-Intermediate',
                },
              ]}
            />
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
            <Select
              {...field}
              className={css.dropdown}
              popupClassName={css.popUp}
              variant="borderless"
              options={[
                {
                  value: '10 $',
                  label: '10 $',
                },
                {
                  value: '20 $',
                  label: '20 $',
                },
                {
                  value: '30 $',
                  label: '30 $',
                },
                {
                  value: '40 $',
                  label: '40 $',
                },
              ]}
            />
          </div>
        )}
      />
    </form>
  );
};

export default FiltersForm;
