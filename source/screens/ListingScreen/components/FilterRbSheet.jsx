import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { typeIcons, typeIconsName } from '../../../assets/Icons'
import { backgroundColors } from '../../../assets/Colors'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const filterRbSheet = ({ pokemonList, setPokemonListAfterFilter }) => {
  const [selectedValueArr, setSelectedValueArr] = useState([]);
  const [pokemonList2, setPokemonList2] = useState(pokemonList);

  const filterHandler = () => {
    selectedValueArr.forEach((value) => {

      const filtered = pokemonList2.filter((item) => {
        if (value.selectedType === "type") {
          return item.types[0].type.name != value.selectedValue;
        } else if (value.selectedType === "weaknesses") {
          return item?.types[0]?.type?.name === value?.selectedValue;
        }
      })
      setPokemonListAfterFilter(filtered);
      setSelectedValueArr([])
    });

  }

  return (
    <>

      <View style={styles.container}>
        <Text style={styles.title}>Filters</Text>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Types</Text>
          <FlatList data={typeIconsName}

            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => {
              const isSelected = selectedValueArr.some((value) => value.selectedValue === item && value.selectedType === "type");
              const selectHandler = () => {
                if (isSelected) {
                  const filteredArr = selectedValueArr.filter((value) => {
                    return value.selectedValue !== item && value.selectedType === "type";
                  });
                  setSelectedValueArr(filteredArr)
                } else {
                  setSelectedValueArr((ext) => {
                    return [...ext, { selectedType: "type", selectedValue: item }]
                  })
                }
              }
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.typeCategorieView, { backgroundColor: isSelected ? backgroundColors[item] : "transparent", padding: isSelected ? 6 : 0 }]}
                  onPress={selectHandler}>
                  <Text style={[styles.icons, { color: isSelected ? "white" : backgroundColors[item] }]}>{typeIcons[item]}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Weaknesses</Text>
          <FlatList data={typeIconsName}

            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item, index }) => {
              const isSelected = selectedValueArr.some((value) => value.selectedValue === item && value.selectedType === "weaknesses");
              const selectHandler = () => {
                if (isSelected) {
                  const filteredArr = selectedValueArr.filter((value) => {
                    return value.selectedValue !== item && value.selectedType === "weaknesses";
                  });
                  setSelectedValueArr(filteredArr)
                } else {
                  setSelectedValueArr((ext) => {
                    return [...ext, { selectedType: "weaknesses", selectedValue: item }]
                  })
                }
              }
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.typeCategorieView, { backgroundColor: isSelected ? backgroundColors[item] : "transparent", padding: isSelected ? 6 : 0 }]}
                  onPress={selectHandler}>
                  <Text style={[styles.icons, { color: isSelected ? "white" : backgroundColors[item] }]}>{typeIcons[item]}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={styles.FilterButtonContainer}>
          <TouchableOpacity style={[styles.FilterButton, { backgroundColor: "#F2F2F2" }]}
            onPress={() => setSelectedValueArr([])}
          >
            <Text style={[styles.FilterButtonText, { color: "#747476" }]}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.FilterButton, { backgroundColor: "#EA5D60", opacity: selectedValueArr.length < 1 ? 0.6 : 1 }]}
            onPress={filterHandler}
            disabled={selectedValueArr.length < 1}
          >
            <Text style={[styles.FilterButtonText, { color: "white" }]}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default filterRbSheet
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#17171B",
    marginBottom: 35
  },
  categoriesContainer: {
    marginBottom: 35
  },
  icons: {
    marginRight: 0,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#17171B",
    marginBottom: 10
  },
  typeCategorieView: {

    borderRadius: 50,
    marginRight: responsiveWidth(9)
  },
  FilterButtonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: responsiveHeight(2),
    left: responsiveWidth(6)
  },
  FilterButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: 15,
    marginRight: responsiveWidth(5)
  },
  FilterButtonText: {
    fontSize: 16,
    fontWeight: "400"
  }

})