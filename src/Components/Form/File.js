import { useField } from "formik";

export default function File({ label, ...props }) {
  const [ helpers] = useField(props);

  const changeHandle = (e) => {
    helpers.setValue(e.target.files[0]);
  };

  return (
    <>
      <label>
        <div className="text-sm text-gray-600">
          {label}
          <input
            className="px-5 rounded bg-blue-50 text-blue-50"
            type="file"
            onChange={changeHandle}
            
            {...props}
          />
        </div>
      </label>
    </>
  );
}
