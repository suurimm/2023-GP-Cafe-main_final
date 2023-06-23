import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import RecommendList from '../components/RecommendList';
import { useEffect, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import RNPickerSelect from 'react-native-picker-select';
//import { Dropdown } from 'react-native-picker-select';
//import DropDownPicker from 'react-native-dropdown-picker';
//RecommendScren에서 버튼을 누른 후 넘어오는 화면

const RecommendScreen2 = () => {
  let apple = [];
  const route = useRoute();
  const { firstSelect, secondSelect, addressSelect } = route.params;

  const [cafeData, setCafeData] = useState([]);

  const order = ['관련도순', '가까운순', '찜많은순'];
  //const [orderSelect, setOrderSelect] = useState('');

  const [buttonList, setButtonList] = useState({
    group_table: 0,
    parking: 0,
    takeout: 0,
    reserv: 0,
    delivery: 0,
    wifi: 0,
    animal: 0,
    bathroom: 0,
    wheelchair: 0,
    charger: 0,
    terrace: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;

        if (secondSelect === 'brunch') {
          url = 'http://localhost:3000/brunch';
        } else if (secondSelect === 'coffee') {
          url = 'http://localhost:3000/coffee';
        } else if (secondSelect === 'tea') {
          url = 'http://localhost:3000/tea';
        } else if (secondSelect === 'dessert') {
          url = 'http://localhost:3000/dessert';
        } else if (secondSelect === 'vegan') {
          url = 'http://localhost:3000/vegan';
        } else if (secondSelect === 'study') {
          url = 'http://localhost:3000/study';
        } else if (secondSelect === 'team') {
          url = 'http://localhost:3000/team';
        } else if (secondSelect === 'large') {
          url = 'http://localhost:3000/large';
        } else if (secondSelect === 'chat') {
          url = 'http://localhost:3000/chat';
        } else if (secondSelect === 'child') {
          url = 'http://localhost:3000/child';
        } else if (secondSelect === 'senior') {
          url = 'http://localhost:3000/senior';
        } else if (secondSelect === 'party') {
          url = 'http://localhost:3000/party';
        } else if (secondSelect === 'rest') {
          url = 'http://localhost:3000/rest';
        } else if (secondSelect === 'sns') {
          url = 'http://localhost:3000/sns';
        } else if (secondSelect === 'theme') {
          url = 'http://localhost:3000/theme';
        }

        const response = await fetch(url);
        const data = await response.json();

        setCafeData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [secondSelect]);

  const handleButtonPress = async (buttonKey) => {
    const updatedButtonList = { ...buttonList };
    updatedButtonList[buttonKey] = updatedButtonList[buttonKey] === 0 ? 1 : 0;
    setButtonList(updatedButtonList);
    //`http://localhost:3000/data/`
    try {
      const response = await fetch(
        `http://localhost:3000/data?name=${secondSelect}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedButtonList),
        }
      );

      if (response.ok) {
        console.log('Button States sent successfully!');
        //console.log(updatedButtonList, secondSelect);
        //const jsonResponse = await response.json();
        //console.log(jsonResponse);

        console.log(updatedButtonList);
        apple = await response.json();
        //setCafeData([]);
        setCafeData(apple);
        console.log(apple);
        //setCafeData(apple);
        //console.log('TEST: ', response.body.updatedButtonList);
      } else {
        console.warn('서버 응답에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };
  /*const orderItems = [
    { label: '관련도순', value: '관련도순' },
    { label: '가까운순', value: '가까운순' },
    { label: '찜많은순', value: '찜많은순' },
  ];*/

  //console.log('넘어감', firstSelect);
  //console.log(secondSelect);
  //console.log(addressSelect);

  //const [sortSelect, setSortSelect] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.loca_content}>
        <MaterialIcons style={styles.loca_icon} name="location-on" size={30} />
        <Text style={styles.address}>{addressSelect}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.purpose_content}>
        <Text style={styles.purpose}>
          목적 : {firstSelect} {'>'} {secondSelect}
        </Text>
      </SafeAreaView>

      <SafeAreaView style={{ flexDirection: 'row' }}>
        <SelectDropdown
          data={order}
          defaultValue="관련도순"
          dropdownStyle={{ backgroundColor: 'white' }}
          buttonStyle={{
            backgroundColor: 'white',
            width: 125,
            marginTop: 13,
            marginRight: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FF9F09',
          }}
          //rowStyle={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}
          onSelect={(selectedItem) => {
            console.log(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          renderDropdownIcon={() => (
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="black"
            />
          )}
          rowTextForSelection={(item) => {
            return item;
          }}
        />
        <ScrollView horizontal contentContainerStyle={styles.scrollcontainer}>
          <TouchableOpacity
            key="group_table"
            style={[
              styles.scrollbutton,
              buttonList['group_table'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('group_table')}
          >
            <Text style={styles.buttonText}>단체석</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="parking"
            style={[
              styles.scrollbutton,
              buttonList['parking'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('parking')}
          >
            <Text style={styles.buttonText}>주차</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="takeout"
            style={[
              styles.scrollbutton,
              buttonList['takeout'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('takeout')}
          >
            <Text style={styles.buttonText}>포장</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="reserv"
            style={[
              styles.scrollbutton,
              buttonList['reserv'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('reserv')}
          >
            <Text style={styles.buttonText}>예약</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="delivery"
            style={[
              styles.scrollbutton,
              buttonList['delivery'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('delivery')}
          >
            <Text style={styles.buttonText}>배달</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="wifi"
            style={[
              styles.scrollbutton,
              buttonList['wifi'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('wifi')}
          >
            <Text style={styles.buttonText}>WIFI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="animal"
            style={[
              styles.scrollbutton,
              buttonList['animal'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('animal')}
          >
            <Text style={styles.buttonText}>반려동물 동반</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="bathroom"
            style={[
              styles.scrollbutton,
              buttonList['bathroom'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('bathroom')}
          >
            <Text style={styles.buttonText}>남/녀 화장실 구분</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="wheelchair"
            style={[
              styles.scrollbutton,
              buttonList['wheelchair'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('wheelchair')}
          >
            <Text style={styles.buttonText}>장애인 편의 시설</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="charger"
            style={[
              styles.scrollbutton,
              buttonList['charger'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('charger')}
          >
            <Text style={styles.buttonText}>콘센트</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key="terrace"
            style={[
              styles.scrollbutton,
              buttonList['terrace'] === 1 && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('terrace')}
          >
            <Text style={styles.buttonText}>테라스</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <FlatList
        data={cafeData}
        renderItem={({ item }) => <RecommendList item={[item]} />}
        keyExtractor={(item, datacid) => datacid.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  loca_content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  loca_icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 700,
  },
  purpose_content: {
    margin: 5,
    marginLeft: 20,
  },
  selects: {},
  scrollcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  scrollbutton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: '#FF9F09',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecommendScreen2;