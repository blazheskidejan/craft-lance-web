import React from 'react';
import ReactDOM from 'react-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';
import GigList from './GigList';
import User from './User';


const itsClicked = () => alert("GIG has been created!")

class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} style={styles.navBarStyle}>
        <ToolbarTitle text="GIG Generator"/>
        <ToolbarSeparator />
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Topic One" />
            <MenuItem value={2} primaryText="Topic Two" />
            <MenuItem value={3} primaryText="Topic Three" />
            <MenuItem value={4} primaryText="Topic Four" />
            <MenuItem value={5} primaryText="Topic Five" />
            <MenuItem value={6} primaryText="Topic Six" />
            <MenuItem value={7} primaryText="Topic Seven" />
            <MenuItem value={8} primaryText="Topic Eight" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton 
            label="Create a GIG" 
            primary={true} 
            onClick={itsClicked}
          />
          <ToolbarTitle text="Viktor Jakovlev"/>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Send feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

//==================

const inputHintTextSize = 13;

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
  <div>
    <ToolbarExamplesSimple />
  </div>

  <div style={styles.divSeparator}>
    <div style={styles.userDiv}>
      <User name="Viktor" image="https://scontent.fskp1-1.fna.fbcdn.net/v/t1.0-9/29214760_1873010892762378_4492572830589613918_n.jpg?_nc_cat=0&oh=3f5d769b0aa8db289313b78251b8d6e0&oe=5B5B552A"/>
    </div>
    <div style={styles.userGigs}>
      <GigList />
    </div>
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
  userDiv: {
    width: 'auto',
    height: 'auto',
    marginRight: '15px',
    marginTop: '10px'
  },
  userGigs: {
  
    width: 'auto',
    height: 'auto',
    border: '1px solid rgb(226, 220, 220)',
    marginRight: '15px'
  },
  uploadStyle: {
    width: '256px'
  },
  formInputSize: {
    fontSize: inputHintTextSize + 'px'
  },
  navBarStyle: {
    marginLeft: '20px'
  },
  divSeparator: {
    display: 'flex',
    flexDirection: 'row'
  },
  paperStyle: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }

}

export default FormField;




// <div style={styles.divBorder}>
//   <TextFieldExampleSimple />
//   <DatePickerExampleInline />
//   <TimePickerExampleSimple />
//   <RaisedButtonExampleComplex />
//   <RaisedButtonExampleSimple />
// </div>