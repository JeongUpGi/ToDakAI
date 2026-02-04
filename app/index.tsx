import { Button, View } from "react-native";
import { supabase } from "../lib/supabase";

async function test() {
  const { data, error } = await supabase.from("messages").select("*");
  console.log("data ====>", data);
  console.log("error ====>", error);
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Test" onPress={test} />
    </View>
  );
}
