import React, { useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../../data/dummy-data';
import { MealItem } from '../components/MealItem';

export const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryIds;
  const data = MEALS.filter((item) => item.categoryIds.includes(catId));
  const catTitle = CATEGORIES.find(item => item.id === catId).title

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: catTitle })
  }, [navigation, catTitle])

  const renderMeals = ({ item }) => {

    const handlePress = () => {
      navigation.navigate('PDP', {
        product: item
      });
    };

    const data = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      handlePress: handlePress
    };

    return <MealItem {...data} />
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderMeals}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
