import { TouchableOpacityProps } from "react-native";
import { Container, Description, StatisticsIcon, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { ButtonIconTypeStyleProps } from "@components/Header/styles";

type PercentageProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonIconTypeStyleProps;
};

export function Percentage({
  title,
  type = "PRIMARY",
  ...rest
}: PercentageProps) {
  const navigation = useNavigation();

  if (parseFloat(title) <= parseFloat("50,00")) {
    type = "SECONDARY";
  } else {
    type = "PRIMARY";
  }

  // console.log(title, type);

  function handleGoToStatistics() {
    navigation.navigate("statistics");
  }

  return (
    <Container {...rest} onPress={handleGoToStatistics}>
      <StatisticsIcon weight="bold" type={type} />

      <Title>{title}%</Title>

      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
