import Button from "../Button/Button.jsx";
const tg = window.Telegram.WebApp;

const Header = () => {

  const onClose = () => {
    tg.close()
  }

  return (
    <header className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>tg.initDataUnsafe?.user?.username</span>
    </header>
  );
};

export default Header;