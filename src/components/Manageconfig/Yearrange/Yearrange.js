/*import { useFormik } from "formik";
/*import DateView from "react-datepicker"; */
/* import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
 */

import { useState } from "react";
import { Form, Field, Formik } from "formik";
import { Outlet} from "react-router-dom";
import * as Yup from "yup";
//import { date, lazy, object, ref } from "yup";
import { ErrorMessage } from "formik";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Yearrange.css";
import { useNavigate } from 'react-router';

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
    const [submit, setsubmit] = useState(false); 
    //state for checking whther form is submitted or not
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
            setsubmit(true)
            navigate('dimensions')
        }; /* once form gets submitted navigate to dimentions compo */

    /* const lvalues=localStorage.setItem("formvalues", JSON.stringify(values));
        return lvalues */

    return (
        <>
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
                        /> {/*feild in formik is input in html  */}
                        <ErrorMessage name="initialyear" />
                    </div>

                    <div className="dates">
                        <label className="space">Intermediate Year</label>
                        <Field 
                            className="formdates"
                            type="date"
                            id="intermediateyear"
                            name="intermediateyear"
                        /> {/*feild in formik is input in html  */}
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
            {submit ? (<Outlet/>) : (<h3 style={{color:"red",textAlign:"center",bottom:"5rem",right:"29rem",position:"relative"}}>Plz complete this form to proceed to the Next Tab</h3>)} 
            {/*if form is submitted it displays dimension compo else display statement  */}

            
        </div>
        
        </>
    );
};
export default Yearrange;
