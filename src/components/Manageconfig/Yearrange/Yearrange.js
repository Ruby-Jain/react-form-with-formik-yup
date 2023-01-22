/*import { useFormik } from "formik";
/*import DateView from "react-datepicker"; */
/* import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
 */

import { useState } from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { date, lazy, object, ref } from "yup";
import { ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Yearrange.css";
import { Navigate, useNavigate } from "react-router-dom";

/*const formik = useFormik({
    initialValues: {
      initialyear: null,
      intermediateyear: null,
      finalyear: null,
    },
    validationSchema: Yup.object({
      initialyear: Yup.date().required("this is required field").nullable(),
    }),
    onSubmit: (values) => {
      alert("form submitted", values);
    },
  });
  const initialdate = new Date();
  const middledate = new Date().getTime();
  const finaldate = new Date().getTime(); 
  const [date1, setDate1] = useState(initialdate);
  const [date2, setDate2] = useState(middledate );
  const [date3, setDate3] = useState(finaldate);

  if (date1 > date2) {
    console.log("current date cannot be more than middle date");
  }*/
const Yearrange = (props) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const defaultValues = {
    initialyear: "",
    intermediateyear: "",
    finalyear: "",
  };

  /*const [selectedDate2, setselectedDate2] = useState(null);
  const [selectedDate3, setselectedDate3] = useState(null);
 */

  /* function getMinDate() {
    return new Date();
  } */

  const validationSchema = Yup.object().shape({
      initialyear: Yup.date()
        .min(new Date())
        .max(
          Yup.ref("intermediateyear"),
          "Initial date must be earlier than the intermediate date"
        )
        .required("Please enter initial Year"),

      intermediateyear: Yup.date()
        .min(
          Yup.ref("initialyear", "finalyear"),
          "intermediate date should be more than initial date and less than final date"
        )
        .required("Please enter intermediate Year"),

      finalyear: Yup.date()
        .min(
          Yup.ref("initialyear", "intermediateyear"),
          "final date should be more than the previous selected dates"
        )
        .required("Please enter final Year"),
    }),
    handleSubmit = (values) => {
      props.onSubmit(values);
    };
  /* const lvalues=localStorage.setItem("formvalues", JSON.stringify(values));
      return lvalues */

  return (
    <div className="yr">
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="formdates">
          <div className="dates">
            <label className="space">Initial Year</label>
            <Field
              type="date"
              className="formdates"
              id="initialyear"
              name="initialyear"
            />
            <ErrorMessage name="initialyear" />
          </div>

          <div className="dates">
            <label className="space">Intermediate Year</label>
            <Field
              className="formdates"
              type="date"
              id="intermediateyear"
              name="intermediateyear"
            />
            <ErrorMessage name="intermediateyear" />
          </div>

          <div className="dates">
            <label className="space">Final Year</label>
            <Field
              className="formdates"
              type="date"
              id="finalyear"
              name="finalyear"
            />
            <ErrorMessage name="finalyear" />
          </div>
          <button className="btn" type="submit">
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Yearrange;
