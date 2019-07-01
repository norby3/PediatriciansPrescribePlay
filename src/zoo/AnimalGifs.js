import React, { Component } from 'react';
import styles from '../../Style'
import { Dimensions }       from 'react-native';
import Image from 'react-native-scalable-image';

const { width, height } = Dimensions.get('window');

export const animalGifs = [
  <Image
     key="horse"
     width={width}
     source={require('../../assets/images/horse.gif')}
     style={styles.zooImage}
  />,
   <Image
       key="polarBear"
       width={width}
       source={require('../../assets/images/polarBear.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="giraffe"
       width={width}
       source={require('../../assets/images/giraffe.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="elephant"
       width={width}
       source={require('../../assets/images/elephant.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="zebra"
       width={width}
       source={require('../../assets/images/zebra.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="fox"
       width={width}
       source={require('../../assets/images/fox.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="kitten"
       width={width}
       source={require('../../assets/images/kitten.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="lamb"
       width={width}
       source={require('../../assets/images/lamb.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="zebra"
       width={width}
       source={require('../../assets/images/squirrel.gif')}
       style={styles.zooImage}
   />,
   <Image
       key="horse-water-bucket"
       width={width}
       source={require('../../assets/images/horse-water-bucket.gif')}
       style={styles.zooImage}
   />,

];
