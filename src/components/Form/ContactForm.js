import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { StyledForm,Label,FormButton,Input } from './Form.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  name: yup
  .string()
  .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/ ,
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
  .required('Please enter a name'),
 
  number: yup.string()
  .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
  .min(6, 'Too Short!')
  .max(12, 'Phone number must have a maximum of 12 digits')
  .required('Please enter a phone number')
});


export default class ContactForm extends Component{
    state = {
      name: '',
      number: '',
    }
  
    nameInputId = nanoid();
    numberInputId = nanoid();
  
   // handleChange= event=> {
    //  this.setState({[event.currentTarget.name]:event.currentTarget.value})
    
  //}
  
 //handleSubmit=event=>{
 //    const {submitForm} = this.props;
 //    submitForm(this.state)
 //  event.preventDefault();
 //  console.log(this.state)
 //  this.reset();
 //}




  render() {
    return(
    <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
        this.props.submitForm(values);
        actions.setSubmitting(false);
        actions.resetForm({
          values: {
            // the type of `values` inferred to be Blog
            name: '',
            number: '',
          },})}}>
      <StyledForm>
      <Label htmlFor={this.nameInputId}>Name </Label>
      <Input type="text" name="name"
    //value={this.state.name} 
    //onChange={this.handleChange}
    id={this.nameInputId}
  />
    <ErrorMessage name="name" />
      
  
      <Label htmlFor={this.numberInputId}> Number </Label>
      <Input type="tel"
    name="number" 
    //value={this.state.number} 
   // onChange={this.handleChange}
    id={this.numberInputId}
  />
    <ErrorMessage name="number" />
    
      <FormButton type='submit'>Add contact</FormButton>
      </StyledForm>
    </Formik>

    );}}