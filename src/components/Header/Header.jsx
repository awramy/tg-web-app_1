import './Header.css'
import Button from "../Button/Button.jsx";
import {useTelegram} from "../../hooks/useTelegram.js";


const Header = () => {

  const {username, onClose} = useTelegram()

  return (
    <header className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>{username}</span>
    </header>
  );
};

export default Header;