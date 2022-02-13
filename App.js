import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Fontisto, Ionicons, Octicons,Feather,FontAwesome  } from '@expo/vector-icons';

const image = {
  image1: {
    uri: 'https://c4.wallpaperflare.com/wallpaper/727/4/1016/men-fitness-model-wallpaper-preview.jpg',
  },
  image2: {
    uri: 'https://advancedbodymetrics.com/wp-content/uploads/2020/03/the-phat-workout-routine.jpg',
  },
  image3: {
    uri: 'https://images.squarespace-cdn.com/content/v1/5602c3cce4b0f8716df3f66d/4e318372-6068-4cf1-a8dd-15b2ca67dff5/Online+Personal+Trainer.jpg',
  },
  image4: {
    uri: 'https://i.dailymail.co.uk/1s/2020/01/19/22/23607692-7905553-image-a-8_1579473870889.jpg',
  },
  image5: {
    uri: 'https://t4.ftcdn.net/jpg/03/06/78/39/360_F_306783992_FmkPkDZnhKdiVpK3qjBPnxnXaZ0NHERN.jpg',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.navbar}>
          <Octicons name="settings" size={28} color="black" />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Fontisto
              name="heart"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Ionicons name="md-notifications-sharp" size={28} color="black" />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.body}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            padding: 30,
            fontSize: 18,
          }}>
          Stories from trainers
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 30,
            height: '15%',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.story}>
              <ImageBackground
                source={image.image1}
                imageStyle={{ borderRadius: 50 }}
                style={styles.story}>
                <Text style={styles.storyName}>penny</Text>
              </ImageBackground>
            </View>
            <View style={styles.story}>
              <ImageBackground
                source={image.image2}
                imageStyle={{ borderRadius: 50 }}
                style={styles.story}>
                <Text style={styles.storyName}>steve</Text>
              </ImageBackground>
            </View>
            <View style={styles.story}>
              <ImageBackground
                source={image.image3}
                imageStyle={{ borderRadius: 50 }}
                style={styles.story}>
                <Text style={styles.storyName}>carlen</Text>
              </ImageBackground>
            </View>
            <View style={styles.story}>
              <ImageBackground
                source={image.image4}
                imageStyle={{ borderRadius: 50 }}
                style={styles.story}>
                <Text style={styles.storyName}>luka</Text>
              </ImageBackground>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}>
              <Text style={styles.storyName}>Aqil.Q</Text>
            </View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
            <View style={styles.story}></View>
          </ScrollView>
        </View>
        <View>
          <View style={{ paddingHorizontal: 20 }}>
            <ImageBackground
              style={{
                width: '100%',
                height: 200,
                marginTop: -50,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              imageStyle={{ borderRadius: 10 }}
              source={image.image5}>
              <View
                style={{
                  width: '85%',
                  backgroundColor: '#303030',
                  height: 100,
                  position: 'absolute',
                  bottom: -50,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal : 20
                  }}>
                  <View>
                    <Text style={styles.contentText}>Luna</Text>
                    <Text style={styles.contentText}>Trainer</Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' , marginBottom : 5}}>
                      <Ionicons
                        name="location-outline"
                        size={22}
                        color="white"
                      />
                      <Text style={{color : "#fff"}}>NYC , 05785</Text>
                    </View>
                  </View>
                  <Feather name="phone-call" size={24} color="white" />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>


        <ScrollView style={{position : 'relative' , top : 80}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{width : 200 ,height : 200 , backgroundColor : '#303030' , borderRadius : 10 , marginHorizontal : 20 , padding : 20}}>
            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-end'}}>
              <FontAwesome name="star" size={24} color="orange" />
              <Text style={{color : "#fff", fontSize : 16, marginLeft : 10}}>5.0</Text>
            </View>
            <View style={{justifyContent : 'center', alignItems : 'center', marginTop : 15}}>
              <Image source={image.image4} style={{width : 80, height : 80}}/>
              <View style={{width : '95%', backgroundColor : "#fff" ,height : 1, marginTop : 15}}></View>
            </View>
            <View style={{flexDirection : 'row', alignItems : 'center' , marginTop : 10}}>
                <Feather name="phone-call" size={21} color="white" />
                <Text style={{color : "#fff", fontSize : 16, marginLeft : 15, fontWeight : 'bold'}}>+875 446 786 15</Text>
            </View>
          </View>
           <View style={{width : 200 ,height : 200 , backgroundColor : '#303030' , borderRadius : 10 , marginHorizontal : 20 , padding : 20}}>
            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-end'}}>
              <FontAwesome name="star" size={24} color="orange" />
              <Text style={{color : "#fff", fontSize : 16, marginLeft : 10}}>5.0</Text>
            </View>
            <View style={{justifyContent : 'center', alignItems : 'center', marginTop : 15}}>
              <Image source={image.image4} style={{width : 80, height : 80}}/>
              <View style={{width : '95%', backgroundColor : "#fff" ,height : 1, marginTop : 15}}></View>
            </View>
            <View style={{flexDirection : 'row', alignItems : 'center' , marginTop : 10}}>
                <Feather name="phone-call" size={21} color="white" />
                <Text style={{color : "#fff", fontSize : 16, marginLeft : 15, fontWeight : 'bold'}}>+875 446 786 15</Text>
            </View>
          </View>
           <View style={{width : 200 ,height : 200 , backgroundColor : '#303030' , borderRadius : 10 , marginHorizontal : 20 , padding : 20}}>
            <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-end'}}>
              <FontAwesome name="star" size={24} color="orange" />
              <Text style={{color : "#fff", fontSize : 16, marginLeft : 10}}>5.0</Text>
            </View>
            <View style={{justifyContent : 'center', alignItems : 'center', marginTop : 15}}>
              <Image source={image.image4} style={{width : 80, height : 80}}/>
              <View style={{width : '95%', backgroundColor : "#fff" ,height : 1, marginTop : 15}}></View>
            </View>
            <View style={{flexDirection : 'row', alignItems : 'center' , marginTop : 10}}>
                <Feather name="phone-call" size={21} color="white" />
                <Text style={{color : "#fff", fontSize : 16, marginLeft : 15, fontWeight : 'bold'}}>+875 446 786 15</Text>
            </View>
          </View>
          
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:StatusBar.currentHeight
  },
  navbar: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    marginTop : 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  body: {
    width: '100%',
    height: 1100,
    borderRadius: 50,
    backgroundColor: '#202020',
    position: 'relative',
    top: -100,
  },
  story: {
    width: 70,
    height: 70,
    marginLeft: 20,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  storyName: {
    color: '#fff',
    position: 'absolute',
    bottom: -30,
  },
  contentText: {
    fontSize: 15,
    color: '#fff',
    marginBottom : 5
  },
});
