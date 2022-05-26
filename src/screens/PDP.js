import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { DetailsMeal } from '../components/DetailsMeal';
import { SubTitle } from '../components/SubTitle';
import { RenderList } from '../components/RenderList';


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsText: {
    color: '#c7a793'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  infoContainer: {
    marginHorizontal: 35,
    marginVertical: 5
  }
})

export const PDP = ({ route, navigation }) => {
  const product = route.params.product;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.title
    })
  }, [navigation])

  return (
    <ScrollView>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <DetailsMeal
        duration={product.duration}
        complexity={product.complexity}
        affordability={product.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.infoContainer}>
        <SubTitle>Ingredients</SubTitle>
        <RenderList data={product.ingredients} />
        <SubTitle>Steps</SubTitle>
        <RenderList data={product.steps} />
      </View>
    </ScrollView>
  );
};
