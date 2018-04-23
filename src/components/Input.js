import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

const INPUT_HINT_TEXT_SIZE = 13;

const TextFieldExampleSimple = () => (
  <div> 
    <TextField
      hintText="this field is required"
      floatingLabelText="Title"
      hintStyle={styles.formInputSize}
    /><br />

    <TextField
      hintText="this field is required"
      floatingLabelText="Short Description"
      hintStyle={styles.formInputSize}
    /><br />

    <TextField
      hintText="this field is not required"
      floatingLabelText="Long Description"
      hintStyle={styles.formInputSize}
    /><br />

    <TextField
      hintText="this field is required"
      floatingLabelText="Location"
      hintStyle={styles.formInputSize}
    /><br />

    <TextField
      hintText="this field is required"
      floatingLabelText="Skills"
      hintStyle={styles.formInputSize}
    /><br />

    <TextField
      hintText="this field is required"
      floatingLabelText="Price"
      hintStyle={styles.formInputSize}
    /><br /><br />
  </div>
);

const DatePickerExampleInline = () => (
  <div>
    <DatePicker hintText="Job date" container="inline" mode="landscape" /><br />
  </div>
);

const TimePickerExampleSimple = () => (
  <div>
    <TimePicker
      hintText="Time"
      autoOk={true}
      format='24hrs'
    />
  </div>
);

const RaisedButtonExampleComplex = () => (
  <div>
    <RaisedButton
      label="Upload Image"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      buttonStyle= {styles.uploadStyle}
      labelColor="gray"
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
  </div>
);

const RaisedButtonExampleSimple = () => (
  <div >
    <div className="SubmitButtonPos" id="test">
      <RaisedButton 
        label="Submit" 
        buttonStyle= {styles.uploadStyle}
        labelColor="gray"
        onClick={submited}
      />
    </div><br />
  </div>
);

function submited() {
  alert("submited")
}

const FormField = () => <div>
  <div style={styles.divBorder}>
    <TextFieldExampleSimple />
    <DatePickerExampleInline />
    <TimePickerExampleSimple />
    <RaisedButtonExampleComplex />
    <RaisedButtonExampleSimple />
  </div>
</div>

const styles = {

  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  divBorder: {
    width: '330px',
    height: 'auto',
    border: '1px solid rgb(226, 220, 220)',
    margin: 'auto',
    marginTop: '30px'
  },
  uploadStyle: {
    width: '256px'
  },
  formInputSize: {
    fontSize: INPUT_HINT_TEXT_SIZE + 'px'
  }

}



export default FormField;