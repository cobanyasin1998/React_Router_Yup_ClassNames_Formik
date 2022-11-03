import { Formik, Form, Field } from "formik";
import Checkbox from "../Components/Form/Checkbox";
import File from "../Components/Form/File";
import Input from "../Components/Form/Input";

export default function Contact() {
  return (
    <>
      <h3>App</h3>

      <Formik
        initialValues={{
          name: "Yasin",
          accept: false,
          about: "",
          gender: 1,
          avatar: "",
          skills: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="p-6">
            {/* <Field name="name"></Field> */}
            <Input label={"AdSoyad"} name="name"></Input>
            <br />
            <Field component="textarea" cols={15} rows={5} name="about"></Field>
            <br />

<Checkbox label="Kuralları Kabul Ediyorum" name="accept"></Checkbox>

            {/* <label>
              <Field type="checkbox" name="accept" />
              Kuralları Kabul Ediyorum
            </label>{" "} */}
            <br />
            <Field component="select" name="gender">
              <option value={1}>Kadın</option>
              <option value={2}>Erkek</option>
            </Field>
            <Field component="select" name="skills" multiple={true}>
              <option value={1}>php</option>
              <option value={2}>.net</option>
              <option value={3}>html</option>
              <option value={4}>jquery</option>
            </Field>
            <br></br>
            {/* <Field type="file" name="avatar" /> */}
            <File label={"Avatar"} name="avatar" />
            <br></br>


            <button disabled={!values.accept} type="submit">
              Gönder
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
