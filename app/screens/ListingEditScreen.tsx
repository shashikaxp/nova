import React from "react";
import { StyleSheet } from "react-native";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppErrorMessage from "../components/AppErrorMessage";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "./../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(100000).label("Price"),
  category: Yup.string().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Clothes", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Electornics", value: 3 },
  { label: "Vehicles", value: 4 },
];

const initialValues = {
  price: "",
  title: "",
  category: null,
  description: "",
};

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <>
            <AppTextInput
              placeholder="Title"
              maxLength={255}
              onChangeText={handleChange("title")}
            />
            <ErrorMessage component={AppErrorMessage} name="title" />

            <AppTextInput
              placeholder="Price"
              keyboardType="numeric"
              maxLength={8}
              onChangeText={handleChange("price")}
            />
            <ErrorMessage component={AppErrorMessage} name="price" />
            <AppPicker
              items={categories}
              selectedItem={values.category}
              placeholder="Category"
              onSelectedItem={(item) => setFieldValue("category", item)}
            />
            <ErrorMessage component={AppErrorMessage} name="category" />

            <AppTextInput
              multiline
              numberOfLines={3}
              maxLength={255}
              placeholder="Description"
              onChangeText={handleChange("description")}
            />
            <ErrorMessage component={AppErrorMessage} name="description" />

            <AppButton title="POST" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default ListingEditScreen;
