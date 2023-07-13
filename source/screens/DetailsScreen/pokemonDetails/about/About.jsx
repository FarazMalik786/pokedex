import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { backgroundColors } from '../../../../assets/Colors'

const About = ({pokemonDetails}) => {
 
  return (
    <View style={styles.container}>
      <Text style={[styles.title , {color: backgroundColors[pokemonDetails.types[0].type.name]}]}>About</Text>
      <View>
        <View style={styles.singleDetailContainer}>
          <Text style={styles.detailTitle}>Height</Text>
          <Text style={styles.detailValue}>{pokemonDetails?.height}</Text>
        </View>
        <View style={styles.singleDetailContainer}>
          <Text style={styles.detailTitle}>Weight</Text>
          <Text style={styles.detailValue}>{pokemonDetails?.weight} lib</Text>
        </View>
        <View style={styles.singleDetailContainer}>
          <Text style={styles.detailTitle}>Abilities</Text>
          {pokemonDetails?.abilities?.map((item , index)=>{
            return <Text key={index} style={styles.detailValue}> {item?.ability?.name} </Text>
          })}
        </View>
        
      </View>
    </View>
  )
}

export default About