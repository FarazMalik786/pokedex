import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { backgroundColors } from '../../../../../../assets/Colors'

const SingleStat = ({ item ,pokemonDetails}) => {
  const calculatePercentage = ()=>{
    return  100 * (item?.base_stat / 100)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item?.stat?.name}</Text>
      <Text style={styles.basestat}>{item?.base_stat}</Text>
      <View style={styles.percentage}>
        <View style={[styles.percentage , {width: `${calculatePercentage()}%` , backgroundColor: backgroundColors[pokemonDetails.types[0].type.name]}]}/>
      </View>
    </View>
  )
}

export default SingleStat