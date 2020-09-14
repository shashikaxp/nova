import React from "react";
import { StyleSheet } from "react-native";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppErrorMessage from "../components/AppErrorMessage";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import Screen from "./../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(100000).label("Price"),
  category: Yup.string().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { value: 1, label: "Furniture", icon: "floor-lamp", color: "#fc5c65" },
  { value: 2, label: "Cars", icon: "car", color: "#fd9644" },
  { value: 3, label: "Cameras", icon: "camera", color: "#fed330" },
  { value: 4, label: "Games", icon: "cards", color: "#26de81" },
  { value: 5, label: "Clothing", icon: "shoe-heel", color: "#2bcbba" },
  { value: 6, label: "Sports", icon: "basketball", color: "#45aaf2" },
  { value: 7, label: "Movies & Music", icon: "headphones", color: "#4b7bec" },
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
              numberOfColumns={3}
              selectedItem={values.category}
              placeholder="Category"
              PickerItemComponent={CategoryPickerItem}
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
