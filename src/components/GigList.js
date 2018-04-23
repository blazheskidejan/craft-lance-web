import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import gigData from './gigdata';

const GigCard = ({ item }) => (
  <Card
    style={{
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10
    }}
  >
    <CardHeader
      title={item.title}
      titleStyle={styles.titleStyleBold}
      subtitle={'by ' + item.user}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <div
      style={{
        textAlign: 'right',
        color: 'grey',
        fontSize: 13,
        paddingRight: 10,
        paddingBottom: 1
      }}
    >
      <p> 
        Price: {item.price} <br />
        {item.kmAway} km away
      </p>
    </div>
    <CardText expandable={true}>{item.description}</CardText>
  </Card>
);

const gigdata = [...gigData];

const GigList = () => <div>{gigData.map(item => <GigCard item={item} />)}</div>;

const styles = {
  titleStyleBold: {
    fontWeight: 'bold',
    fontSize: 20
  }
};

export default GigList;
