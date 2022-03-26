import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../components';
import {Fire} from '../../config';
import {showError} from '../../utils';

const UserProfile = ({navigation, route}) => {
  const profile = route.params;
  const changeLangMsg = 'Sorry, this feature is not available right now';
  const giveRateMsg =
    'Sorry, Punten Doc is not available on Playstore right now';

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const changeLang = () => {
    showError(changeLangMsg);
  };

  const rateUs = () => {
    showError(giveRateMsg);
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Tap here if you want to update your profile"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Languange"
        desc="Tap here if you want to change app language"
        type="next"
        icon="language"
        onPress={changeLang}
      />
      <List
        name="Give Us Rate"
        desc="On Google Playstore"
        type="next"
        icon="rate"
        onPress={rateUs}
      />
      <List
        name="Sign Out"
        desc="tap here if you want to sign out form your account "
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
