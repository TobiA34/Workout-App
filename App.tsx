/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
 import NavComponent from './components/NavComponent';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LargeRectangleCards from './components/LargeRectangleCards';
import SquareCards from './components/SquareCards';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NavComponent/>
         <View>
          <View style={styles.row}>
            <LargeRectangleCards 
            desc="Everything you need to know about your health"
            title="My Activity Recap" image="https://petapixel.com/assets/uploads/2022/09/SportsPhotographerBasketball3-800x800.jpeg"/>
          </View>
            <View style={styles.spaceBetween}>
            <Text>
              Gentler Streak
            </Text>

            <Text>
              View all
            </Text>
            </View>
             <ScrollView
            horizontal={true}>
              <SquareCards/>
              <SquareCards/>
              <SquareCards/>
              <SquareCards/>
              <SquareCards/>
              <SquareCards/>
              <SquareCards/>
            </ScrollView>

            <Text style={styles.headingText}>Let's get personal</Text>

            <Text style={styles.headingParagraph}>Gentler community sharing fitness stories to support each other in creating healthier habits.</Text>

        </View>
      </ScrollView>
   );

}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignContent:'center',
  },

  spaceBetween: {
      flexDirection: 'row',
      justifyContent:'space-between',
      padding:20,
  },

  headingText: {
      padding: 15,
      marginTop: 30,
      fontSize: 20,
      fontWeight:'bold',
  },

  headingParagraph: {
    padding: 15,
    width: '94%'
  }
});

export default App;
