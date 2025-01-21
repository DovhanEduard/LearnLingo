export function env(name, defaultValue) {
  const value = import.meta.env[name];

  if (value) return value;

  console.log(value);

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
