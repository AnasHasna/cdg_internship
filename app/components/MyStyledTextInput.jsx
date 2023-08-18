import React from 'react';
import { Colors, ErrorMessage, LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } from './styles';
import { View } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useFormikContext } from 'formik';

const MyStyledTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  const { brand, darkLight } = Colors;
  const { handleChange, handleBlur, values, errors, touched } = useFormikContext();
  const fieldError = errors[props.name]; // Access the error for this field
  const fieldTouched = touched[props.name]; // Check if the field has been touched
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput
        {...props}
        onChangeText={handleChange(props.name)} // Use props.name here
        onBlur={handleBlur(props.name)}
      />
      {fieldError &&
        fieldTouched && ( // Display error only if field has been touched and has an error
          <ErrorMessage>{fieldError}</ErrorMessage>
        )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default MyStyledTextInput;
