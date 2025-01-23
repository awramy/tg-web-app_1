import './Form.css'
import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "../../hooks/useTelegram.js";


const Form = () => {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [subject, setSubject] = useState('physical')

  const { tg } = useTelegram()

  //сама функция для вызова в эффекте
  const onSendData = useCallback(() => {
    const  data = {
      country,
      city,
      subject
    }
    // отправляем данные в обработку серверу
    tg.sendData(JSON.stringify(data))
    tg.onClose()
  }, [country, city, subject])

  //эффект навешивает прослушку на главную кнопку
  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])
  //эффект настраивает главную кнопку
  useEffect(() => {
    tg.MainButton.setParams({
      text: 'отправить данные'
    })
  }, [])
  //эффект показывает гравную кнопку только если поля не пустые
  useEffect(() => {
    if(!city || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, city])

  //хэндлеры для стейтов
  const onChangeCountry = e => {
    setCountry(e.target.value)
  }
  const onChangeCity = e => {
    setCity(e.target.value)
  }
  const onChangeSubject = e => {
    setSubject(e.target.value)
  }

  return (
    <div className={"form"}>
      <h3>Введите данные:</h3>
      <input
        className={'input'}
        type="text"
        placeholder={'Страна'}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={'input'}
        type="text"
        placeholder={'Город'}
        value={city}
        onChange={onChangeCity}
      />

      <select
        value={subject}
        onChange={onChangeSubject}
        className={"select"}
      >
        <option value={'physical'}>Физ лицо</option>
        <option value={'legal'}>Юр лицо</option>
      </select>
    </div>
  );
};

export default Form;