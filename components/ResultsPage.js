import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsPage = ({ route }) => {
  const { productData, flaggedIngredients, additives } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Results Page</Text>
      <Text style={styles.subHeader}>Flag Score: (Color/Label/etc)</Text>
      <Text style={styles.label}>Product Name: {productData.product_name}</Text>
      <Text style={styles.label}>Ingredients: {productData.ingredients_text}</Text>
      <Text style={styles.label}>Additives:</Text>
      {additives.length > 0 ? (
        additives.map((additive, index) => (
          <Text key={index}>{additive.name}</Text>
        ))
      ) : (
        <Text>No additives found.</Text>
      )}
      <Text style={styles.label}>Flagged Ingredients:</Text>
      {flaggedIngredients.length > 0 ? (
        flaggedIngredients.map((ingredient, index) => (
          <View
            key={index}
            style={[
              styles.ingredientContainer,
              ingredient.severity === 'red' ? styles.redFlag : ingredient.severity === 'yellow' ? styles.yellowFlag : styles.greenFlag,
            ]}
          >
            <Text style={styles.ingredientName}>{ingredient.name}</Text>
            <Text>Reason: {ingredient.reason}</Text>
            <Text>Severity: {ingredient.severity}</Text>
          </View>
        ))
      ) : (
        <Text>No flagged ingredients found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1ECD8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  ingredientContainer: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  ingredientName: {
    fontWeight: 'bold',
  },
  redFlag: {
    backgroundColor: '#ffcccc',
  },
  yellowFlag: {
    backgroundColor: '#ffffcc',
  },
  greenFlag: {
    backgroundColor: '#ccffcc',
  },
});

export default ResultsPage;
