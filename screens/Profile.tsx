import { Button, Text } from "react-native";
import { useDispatch } from "react-redux";
import { checkLogin } from "../redux/Account/account.actions";

const Profile = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkLogin());
  };

  return <Button title="Hello" onPress={handleClick} />;
};

export default Profile;
