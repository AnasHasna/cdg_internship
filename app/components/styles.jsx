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
  green: '#D9F2DC',
  lightGreen: '#eef7eb',
};

const { primary, secondary, tertiary, darkLight, brand, green, lightGreen } = Colors;

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

export const ProjectDetailContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${green};
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
  border: 1.3px solid ${brand};
`;

export const CreateProjectContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${primary};
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
  border: 1.3px solid ${brand};
`;

export const CreateProjectTextContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CreateProjectText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
  font-size: 20px;
  color: ${tertiary};
  font-weight: bold;
  text-align: center;
`;

export const ProjectDetailText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  color: ${tertiary};
  font-weight: bold;
  text-align: left;
`;

export const CreateProjectSubText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: ${tertiary};
`;

export const ProjectDetailSubText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  text-align: left;
  font-size: 15px;
  color: ${tertiary};
`;

export const CreateProjectButton = styled.TouchableOpacity`
  align-items: center;
  border: 1.3px solid ${brand};
  padding: 10px;
  margin: 10px;
  backgound-color: ${primary};
`;

export const ProjectDetailButton = styled.TouchableOpacity`
  align-items: center;
  align-self: flex-start;
  margin: 10px;
  color: ${primary};
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

export const StyledTextInputArea = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-right: 150px;
  border-radius: 15px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
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

export const TaskCardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${lightGreen};
  padding: 20px;
  border-radius: 10px;
`;

export const TaskCardIcon = styled.View`
  background-color: ${brand};
  justify-content: center;
  border-radius: 25px;
  margin-vertical: 5px;
  height: 50px;
  width: 50px;
  align-items: center;
  border: 1.5px solid ${brand};
  margin-right: 20px;
`;

export const TaskCardTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const TaskCardText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  font-size: 20px;
  color: ${tertiary};
  font-weight: bold;
  text-align: left;
`;
export const TaskCardSubText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  text-align: left;
  font-size: 15px;
  color: ${tertiary};
`;

export const TaskCardButton = styled.TouchableOpacity`
  align-items: center;
  align-self: flex-start;
  margin: 10px;
  color: ${tertiary};
`;

export const TaskInfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  width: 90%;
  align-items: center;
  background-color: ${primary};
  border-radius: 10px;
  border: ${brand};
  margin: 10px;
  padding: 20px;
  elevation: 3;
`;

export const TaskInfoText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  font-size: 20px;
  color: ${tertiary};
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;

export const TaskSliderCOntainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const TaskSliderLabel = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  font-size: 20px;
  color: ${tertiary};
  font-weight: bold;
  text-align: left;
`;

export const CommentContainer = styled.View`
  flex-direction: column;
  width: 90%;
  align-items: flex-end; /* Align content to the right for SMS-like appearance */
  background-color: ${brand}; /* Set the background color to green */
  border-radius: 10px;
  margin: 5px;
  padding: 8px;
  elevation: 3;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
`;

export const CommentText = styled.Text`
  flex: 1;
  width: 100%;
  align-items: center;
  font-size: 20px;
  color: ${primary};
  font-weight: bold;
  text-align: left;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
  background-color: ${primary};
  margin: 10px;
`;

export const StyledTextInputAreaTask = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  border-radius: 15px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;
