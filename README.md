# Клиент для мессенджера Atmosphere

Проект был создан при помощи `create-react-app`.

## Инструкция по эксплуатации

Все технологии, используемые в клиенте мессенджера распространяются по свободной лицензией.

![Главная страница](https://github.com/yaonkey/atm-client/raw/main/public/Assets/Images/1.png)

### Авторизация

Если пользователь не зарегистрирован в системе, то он ему требуется ввести свой никнейм и пароль, которые в будущем будут использоваться для авторизации. При авторизации требуется ввести данные, которые были использованы при регистрации.

### Восстановление данных

При утере данных, на данный момент, возможности их восстановления **не существует**.

### Изменение данных

При надобности изменения пароля стоит зайти во вкладку `Настройки` и в соответствующем поле ввести новый пароль с последующим нажатием на кнопку `Сохранить`.

### Изменение темы оформления

На данный момент существуют лишь две темы - светлая и темная, однако список доступных тем будет пополняться.

### Выход из мессенджера

При надобности выхода из своего аккаунта существует кнопка `Выход`, которая позволяет выйти из системы без удаления аккаунта из системы. Данные, типа куки, удаляются автоматически после выхода.

### Удаление аккаунта

При надобности удаления аккаунта из системы существует кнопка `Удалить аккаунт`, находящаяся в меню `Настройки`. После нажатия на кнопку все данные пользователя будут безвозвратно удалены из системы. **Восстановить данные будет невозможно!**

### Правила переписки:
*Никаких ограничений в переписке не существует, однако, для приличия, стоит придерживаться неких правил.*
* Не стоит употреблять мат на постоянной основе, иначе собеседнику будет неприятно общение.
* Не стоит отправлять конфиденциальную информацию, иначе она может попасть не в те руки.
* Не стоит разглашать свой пароль, иначе можно потерять все свои данные.
* Не стоит оскорблять своего собеседника, иначе это может отразиться на вашем общении в реальной жизни.
* Не стоит отправлять сообщение по одному слову, иначе постоянные уведомления могут разозлить собеседника.
* Не стоит пытаться продать нечто запрещенное собеседнику, иначе можно быть привлеченным к ответственности.
* Будьте бдительны, используя маску анонимности.

![Анонимность](https://github.com/yaonkey/atm-client/raw/main/public/Assets/Images/2.png)

## Информация для разработчиков

Все описанное ниже может представлять интерес для разработчиков.

### Стек технологий

**Для управления использовать `npm`.**
* React
* Babel
После установки выполнить команду `npm install`.

### Запуск проекта

В директории проекта выполнить одну из команд:

#### `npm start`

Запускает сервер для разработки\
Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть полученный результат.

Страница будет перезагружена при внесении изменений.
Ошибки можно увидеть в терминале.

#### `npm test`

Запускает созданные тесты/

#### `npm run build`

Создает сборку для внедрения в продакшн в директорию `build`.
