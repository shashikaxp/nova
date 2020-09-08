import React, { useState } from "react";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

export default function App() {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Cloth", value: 2 },
    { label: "Vehicle", value: 3 },
  ];

  let [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppTextInput icon="apps" placeholder="Category" />
      <AppPicker
        items={categories}
        selectedItem={category}
        onSelectedItem={setCategory}
        icon="email"
        placeholder="Email"
      />
    </Screen>
  );
}
