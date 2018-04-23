import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card } from 'material-ui/Card';

const Field = ({ name, value }) => (
  <p style={styles.field}>
    {name}
    <div style={{ paddingLeft: 2 }}>{value}</div>
  </p>
);

const Profile = ({
  name,
  image,
  description,
  age,
  contact,
  location,
  skills
}) => (
  <Card style={styles.profile}>
    <Avatar src={image} size={150} />
    <Field name="Name: " value={name} />
    <Field name="Description: " value={description} />
    <Field name="Age: " value={age} />
    <Field name="Contact: " value={contact} />
    <Field name="Location: " value={location} />
    <Field name="Skills: " value={skills} />
  </Card>
);

const styles = {
  field: {
    display: 'flex',
    flexDirection: 'row'
  },
  profile: {
    display: 'flex',
    padding: 20,
    height: 'auto',
    textAlign: 'left',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Profile;
