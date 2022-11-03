import { useField } from "formik";

export default function Input({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div>
      <label className="block w-full" ><div className="text-sm text-gray-600">{label}</div></label>
      <input className="w-full h-10  border-b outline-none focus:border-black" {...field} {...props} />
    </div>
  );
}
