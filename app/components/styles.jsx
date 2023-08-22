import styled from 'styled-components';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#2E3641',
  darkLight: '#759A1F',
  brand: '#607F18',
  green: '#10B981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.ScrollView`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const NavBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  background-color: ${primary};
  align-items: center;
  margin-bottom: 20px;
`;

export const NavBarText = styled.Text`
  font-size: 20px;
  color: ${tertiary};
`;

export const NavBarTitle = styled.Text`
  font-size: 20px;
  color: ${tertiary};
  font-weight: bold;
`;

export const NavBarButton = styled.TouchableOpacity`
  background-color: ${primary};
  justify-content: center;
  border-radius: 25px;
  margin-vertical: 5px;
  height: 40px;
  align-items: center;
`;

export const NavBarButtonIcon = styled.View``;

export const NavBarIcon = styled.View`
  background-color: ${primary};
  justify-content: center;
  border-radius: 25px;
  margin-vertical: 5px;
  height: 40px;
  width: 40px;
  align-items: center;
  border: 1.5px solid ${brand};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
  resize-mode: contain;
`;

export const PageTitle = styled.Text`
  font-size: 27px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const PageText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${tertiary};
  padding: 10px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 15px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 17px;
  text-align: left;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 15px;
  margin-vertical: 5px;
  height: 60px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${tertiary};
  font-size: 15px;
  padding: 15px;
  text-align: center;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
  padding-right: 10px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
`;
