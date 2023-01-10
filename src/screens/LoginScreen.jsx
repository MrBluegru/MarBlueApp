import React from "react";
import { Formik, useField } from "formik";
import { Text, View, StyleSheet, Button, StyleText } from "react-native";
import StyledTexInput from "../components/StyledTexInput";
import { loginValidationSchema } from "../validationSchemas/login";
import StyledText from "../components/StyledText";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 10,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 20,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTexInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const LoginScreen = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="E-mail" name="email" />
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;
