import checkmarkIconDark from "../../assets/checkmark-dark.svg";
import checkmarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

function SkillList({skill}) {
    // theme info
    const {theme} = useTheme();

    // icons for light and dark theme
    const checkmarkIcon = theme === "light" ? checkmarkIconLight : checkmarkIconDark;

  return (
    <span>
        <img src={checkmarkIcon} alt="Checkmark icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList