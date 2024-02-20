import client from "../api/api";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

const UrlShorterForm = () => {
  const [showUrl, setShowUrl] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const initialValues = {
    origUrl: "",
  };

  const validationSchema = Yup.object().shape({
    origUrl: Yup.string("Este campo precisa ser uma URL!")
      .url("Este campo precisa ser uma URL!")
      .required("Este campo é obrigatório!"),
  });

  const handleSubmit = (data) =>
    client
      .post("", data)
      .then((response) => {
        setShortUrl(response.data.shortUrl);
        setShowUrl(true);
      })
      .catch((err) => console.error(err));

  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <div>
                <label htmlFor="origUrl" className="font-bold">URL: </label>
                <Field
                  name="origUrl"
                  id="origUrl"
                  type="text"
                  className={
                    "form-control" +
                    (errors.origUrl && touched.origUrl ? "is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="origUrl"
                  component="div"
                  className="is-invalid"
                />
              </div>
              <div className="">
                <button type="submit" className="border-solid border-green-600 border-2 bg-green-600 text-white p-2 m-2">Encurtar</button>
                <button type="button" className="border-solid border-red-500 border-2 bg-red-500 text-white p-2 m-2" onClick={resetForm}>
                  Limpar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {showUrl && (
        <div>
          Esta é a URL encurtada:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlShorterForm;
