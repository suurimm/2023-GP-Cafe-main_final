import { memo, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const RecommendList = memo(({ item }) => {
  return (
    <View style={styles.container}>
      {item.map((innerItem, id) => (
        <View key={id} style={styles.item}>
          <View style={styles.column1}>
            <Text style={styles.distance}>{innerItem.distance} m</Text>
            <Image
              style={styles.image}
              //source={require('../assets/cafe.png')}
              source={{
                uri: innerItem.imgsrc,

                //uri: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230406_209%2F1680777223044lYM6Q_JPEG%2F42205B3A-7238-49D6-8CEC-3304C60BF2B5.jpeg',
              }}
            />
          </View>
          <View style={styles.column2}>
            <Text style={styles.name}>{innerItem.카페명}</Text>
            <Text style={styles.address}>{innerItem.네이버주소}</Text>
            <View style={styles.row}>
              <Text style={innerItem.TOP1 ? styles.tag : styles.hiddenItem}>
                {innerItem.TOP1}
              </Text>
              <Text style={innerItem.TOP2 ? styles.tag : styles.hiddenItem}>
                {innerItem.TOP2}
              </Text>
              <Text style={innerItem.TOP3 ? styles.tag : styles.hiddenItem}>
                {innerItem.TOP3}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
});

RecommendList.displayName = 'RecommendList';

RecommendList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      imgsrc: PropTypes.string.isRequired,
      카페명: PropTypes.string.isRequired,
      네이버주소: PropTypes.string.isRequired,
      TOP1: PropTypes.string.isRequired,
      TOP2: PropTypes.string.isRequired,
      TOP3: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 3,
    borderColor: '#FF9F04',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  column1: {
    flex: 0.7,
    alignItems: 'center',
  },
  distance: {
    color: '#FF9F04',
  },
  column2: {
    flex: 1.3,
  },

  image: {
    width: 100,
    height: 100,
    //borderWidth: 1,
    //borderColor: '#000',
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 15,
  },
  address: {
    marginBottom: 10,
    fontSize: 13,
    fontWeight: 500,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
    marginRight: 20,
    borderColor: '#D3D3D3',
  },
  hiddenItem: {
    display: 'none',
  },
});

export default RecommendList;
