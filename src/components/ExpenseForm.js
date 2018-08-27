import { Field, Form, Formik } from 'formik';
import moment from 'moment';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import * as Yup from 'yup';

//
// class ExpenseForm extends Component {
//   onDescriptionChange = (e) => {
//     const description = e.target.value;
//     this.setState(() => ({description}));
//   };
//   onNoteChange = (e) => {
//     const note = e.target.value;
//     this.setState(() => ({note}));
//   };
//   onAmountChange = (e) => {
//     const amount = e.target.value;
//     if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
//       this.setState(() => ({amount}));
//     }
//   };
//   onDateChange = (createdAt) => {
//     if (createdAt) {
//       this.setState(() => ({createdAt}));
//
//     }
//   };
//   onFocusChange = ({focused}) => {
//     this.setState(() => ({calendarFocused: focused}));
//   };
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (!this.state.description || !this.state.amount) {
//       this.setState(() => ({
//         error: 'Please provide amount and description'
//       }));
//     } else {
//       this.setState(() => ({
//         error: ''
//       }));
//       this.props.onSubmit({
//         description: this.state.description,
//         amount: parseFloat(this.state.amount, 10) * 100,
//         createdAt: this.state.createdAt.valueOf(),
//         note: this.state.note
//       });
//     }
//   };
//
//   constructor (props) {
//     super(props);
//     this.state = {
//       description: props.expense ? props.expense.description : '',
//       note: props.expense ? props.expense.note : '',
//       amount: props.expense ? (props.expense.amount / 100).toString() : '',
//       createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
//       calendarFocused: false,
//       error: ''
//     };
//   }
//
//   render () {
//     return (
//       <form className="form" onSubmit={this.onSubmit}>
//         {this.state.error && <p className="form__error">{this.state.error}</p>}
//         <input
//           type="text"
//           placeholder="Description"
//           autoFocus
//           className="text-input"
//           value={this.state.description}
//           onChange={this.onDescriptionChange}/>
//         <input
//           type="text"
//           placeholder="Amount"
//           className="text-input"
//           value={this.state.amount}
//           onChange={this.onAmountChange}/>
//         <SingleDatePicker
//           date={this.state.createdAt}
//           onDateChange={this.onDateChange}
//           focused={this.state.calendarFocused}
//           onFocusChange={this.onFocusChange}
//           numberOfMonths={1}
//           isOutsideRange={(day) => false}
//           block={true}
//         />
//         <textarea
//           className="text-area"
//           placeholder="Add a note for your expense (optional)"
//           value={this.state.note}
//           onChange={this.onNoteChange}/>
//         <div>
//         <button className="button">Save Expense</button>
//         </div>
//       </form>
//
//     );
//   }
// }

class ExpenseForm extends Component {
  state = {
    calendarFocused: null
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  };

  render () {

    return (
      <div>
        <Formik
          validationSchema={Yup.object().shape({
            description: Yup.string().required('Please enter a description'),
            amount: Yup.string().required('Please enter an amount').matches(/^\d{1,}(\.\d{0,2})?$/, 'Please enter a valid number')
          })}
          initialValues={{
            description: this.props.expense ? this.props.expense.description : '',
            amount: this.props.expense ? this.props.expense.amount / 100 : '',
            note: this.props.expense ?this.props.expense.note : '',
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
          }}
          onSubmit={(values, {setFieldError, setSubmitting}) => {
            if (!values.description) {
              this.setState(() => {
                setFieldError('description', 'Please enter a description');
              });

            } else {

              this.props.onSubmit({
                description: values.description,
                amount: parseFloat(values.amount, 10) * 100,
                createdAt: values.createdAt.valueOf(),
                note: values.note
              });
            }

            setSubmitting(false);
          }}
          render = {({values, touched, errors, dirty, isSubmitting, handleChange})  => (
          <Form className="form">
            {touched.description && errors.description && <p className="form__error">{errors.description}</p>}

            <Field
              type="text"
              name="description"
              autoFocus
              className="text-input"
              placeholder="Description"
            />
            {touched.amount && errors.amount && <p className="form__error">{errors.amount}</p>}

            <Field
              type="text"
              name="amount"
              className="text-input"
              placeholder="Amount"
            />
            <SingleDatePicker
              date={values.createdAt}
              onDateChange={handleChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              block={true}
            />
            <Field
              type="textarea"
              name="note"
              className="text-input"
              placeholder="Add a note for your expense (optional)"
            />

            <button disabled={isSubmitting} type="submit" className="button">Save Expense</button>


          </Form>
          )}
        >

        </Formik>
      </div>

    );
  }
}

// const FormikExpenseForm = withFormik({
// mapPropsToValues({ description, amount, note, createdAt}) {
//   return {
//     description: description || '',
//     amount: amount ? amount / 100 :0,
//     note: note || '',
//     createdAt: createdAt ? moment(moment) : moment(),
//   }
// },
//   validationSchema: Yup.object().shape({
//     description: Yup.string().required("Please enter a description"),
//     amount: Yup.string().required("Please enter an amount").matches(/^\d{1,}(\.\d{0,2})?$/,"Please enter a valid number"),
//   }),
//   handleSubmit(values , {setFieldError, setSubmitting}) {
//     if (!values.description) {
//       this.setState(() => {
//         setFieldError("description", 'Please enter a description')
//     });
//
//     } else {
//
//       this.props.onSubmit({
//         description: values.description,
//         amount: parseFloat(values.amount, 10) * 100,
//         createdAt: values.createdAt.valueOf(),
//         note: values.note
//       });
//     }
//
//     setSubmitting(false)
//   }
//
//
// })(ExpenseForm);

export default ExpenseForm;
