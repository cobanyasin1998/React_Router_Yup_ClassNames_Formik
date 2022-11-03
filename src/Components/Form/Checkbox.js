import { useField } from "formik";
import { AiOutlineCheck  } from "react-icons/ai";
export default function Checkbox({ label, ...props }) {
  const [field,helpers] = useField(props);
  return (
    <div>
      <label className="flex ga-x-2 items-center">{label}</label>
      <button onClick={()=>{
        helpers.setValue(!field.value)
      }} className="w-5 h-5 rounded border text-transparent flex items-center justify-center">
        <AiOutlineCheck size={16}/>
      </button>
      <div className="text-sm">  {label}</div>
    
      {/* <input {...field} {...props} /> */}
    </div>
  );
}
