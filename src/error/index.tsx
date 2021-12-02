import { toast } from 'react-toastify'
import { TError } from 'store/modules/errors/types'

export const errorNotify = (error: TError) => {
  if (error.response && error.response.data) {
    const data = error.response.data
    toast.error(messagesConverter(data.error))
    if (data.message && Array.isArray(data.message)) {
      data.message.forEach((m: string) => toast.error(messagesConverter(m)))
    } else if (data.message) {
      toast.error(messagesConverter(data.message))
    }
  } else {
    toast.error('Ooops...')
  }
}

export const messagesConverter = (m: string) => {
  switch (m) {
    case 'Validation Error':
      return 'Неверно заполнено поле.'
    case 'inn must be longer than or equal to 10 characters':
      return 'ИНН должен содержать 10 или 12 цифр.'
    case 'Unauthorized':
      return 'Ошибка авторизации.'
    case 'Not Found':
      return 'Объект не найден.'
    case 'Internal Server Error':
      return 'Нет доступа к серверу. Повторите попытку позже...'
    case 'Method not implemented':
      return 'Данное действие не возможно выполнить. Обратитесь в тех. поддержку.'
    case 'Invalid credentials':
      return 'Неверные логин или пароль.'
    case 'Sms request too often':
      return 'Слишком частый запрос на отправку смс.'
    case 'Object not found':
      return 'Объект не найден.'
    case 'User not found':
      return 'Пользователь не найден.'
    case 'User`s password is empty':
      return 'Введите, пожалуйста, пароль.'
    case 'Catalog phonogram number does not match':
      return 'Номер фонограммы не совпадает с каталогом.'
    case 'User already exists':
      return 'Пользователь уже существует.'
    case 'Company not found':
      return 'Компания не найдена.'
    case 'Access denied':
      return 'Доступ запрещён.'
    case 'Device not registered':
      return 'Устройство не зарегистрировано в системе.'
    case 'Device is registered to another company':
      return 'Данное устройство зарегистрировано в другой компании.'
    case 'Client not found':
      return 'Пользователь не найден.'
    case 'Player user not found':
      return 'Пользователь не найден.'
    case 'Entertainment center not found':
      return 'Компания не найдена.'
    case 'User is locked':
      return 'Пользователь  заблокирован.'
    case 'Email already in use':
      return 'Введенная электронная почта уже используется в системе.'
    case 'Contract not found':
      return 'Договор не найден.'
    case 'File not found':
      return 'Не удалось найти файл.'
    case 'File is not attached':
      return 'Не удалось прикрепить файл.'
    case 'Xls file parsing is failured':
      return 'Ошибка обработки xls файла.'
    case 'File has the wrong format':
      return 'Неверный формат файла.'
    case 'File cannot be parsed':
      return 'Загруженный файл не может быть обработан.'
    case 'File cannot be built':
      return 'Невозможно сформировать файл.'
    case 'Files are too large':
      return 'Слишком большой файл.'
    case 'Phonogram not found':
      return 'Фонограмма не найдена.'
    case 'Playlist not found':
      return 'Плейлист не найден.'
    case 'Default chart can not be updated':
      return 'Нельзя обновить текущий чарт.'
    case 'Tariff not found':
      return 'Выбранный тариф не найден.'
    case 'License missing or expired':
      return 'Лицензия не найдена или срок действия лицензии истек.'
    case 'Exceeded the number of devices':
      return 'Превышено допустимое количество добавленных устройств. Обновите лицензию или удалите одно из текущих устройств.'
    case 'Exceeded the number of playlists':
      return 'Превышено допустимое количество добавленных плейлистов. Обновите лицензию или удалите один из текущих плейлистов.'
    case 'License not found':
      return 'Действующая лицензия не найдена.'
    case 'Signature not verified':
      return 'Подпись договора не подтверждена.'
    case 'Support subject not found':
      return 'Не выбрана тема обращения.'
    case 'phone must be a valid phone number':
      return 'Номер телефона должен быть валидным.'
    case 'email must be an email':
      return 'Адрес эл. почты должен быть валидным.'
    case 'inn must be a number string':
      return 'ИНН должен быть числом'
    default:
      return m
  }
}
