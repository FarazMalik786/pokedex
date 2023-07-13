import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { backgroundColors } from '../../../../assets/Colors'
import SingleStat from './component/singlestat/SingleStat'

const BaseState = ({ pokemonDetails }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: backgroundColors[pokemonDetails.types[0].type.name] }]}>BaseState</Text>
      <FlatList
        data={pokemonDetails?.stats}
        renderItem={({ item, index }) => {
          return <SingleStat key={index} item={item} pokemonDetails={pokemonDetails} />
        }}
      />
    </View>
  )
}

export default BaseState