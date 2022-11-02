import { useParams } from "react-router-dom";
export default function BlogPost() {
  const params = useParams();
  console.log(params);
  return <div>Post Page</div>;
}
