import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';
import {ILNullPhoto} from '../../assets';

const Doctor = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: 'Syaiful Izzuddin Salam',
    profession: 'Software Developer',
  });

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile
              profile={profile}
              onPress={() => navigation.navigate('UserProfile')}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory
                  category="psikiater"
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory category="dokter umum" />
                <DoctorCategory category="dokter obat" />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <Gap height={16} />
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pediatrician"
              avatar={{uri: 'https://placeimg.com/480/480/people'}}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pediatrician"
              avatar={{uri: 'https://placeimg.com/480/480/people'}}
            />
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pediatrician"
              avatar={{uri: 'https://placeimg.com/480/480/people'}}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem
            title="Is it safe to stay at home during coronavirus?"
            date="Today"
            image="https://placeimg.com/640/480/arch"
          />
          <NewsItem
            title="Is it safe to stay at home during coronavirus?"
            date="Today"
            image="https://placeimg.com/640/480/arch"
          />
          <NewsItem
            title="Is it safe to stay at home during coronavirus?"
            date="Today"
            image="https://placeimg.com/640/480/arch"
          />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
  },
});
