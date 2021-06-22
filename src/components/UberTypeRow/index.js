import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'Bus No. 26') {
      return require('../../assets/images/bus2.png');
    }
    if (type.type === 'Bus No. 15') {
      return require('../../assets/images/bus2.png');
    }
    return require('../../assets/images/bus2.png');
  }

  return (
    <View style={styles.container}>

      {/*  Image */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={16} />
          15
        </Text>
        <Text style={styles.time}>
          8:47PM drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. Rs.{type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;