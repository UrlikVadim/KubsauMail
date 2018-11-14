


var globalClient = {};

class Registation extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (<div className="Registation">
      <form className="SignInForm">
        <p>Фамилия</p>
        <input type="text" className="SignInInput"></input>
        <p>Имя</p>
        <input type="text" className="SignInInput"></input>
        <p>Отчество</p>
        <input type="text" className="SignInInput"></input>        
        <p>Логин</p>
        <input type="text" className="SignInInput"></input>
        <p>Пароль</p>
        <input type="password" className="SignInInput"></input>
        <p className="Enter" onClick={this.registation}>Зарегистрироваться</p>
      </form>
    </div>);
  }
}


class SignIn extends React.Component {
  constructor(props) {
    super(props);

  }

  Signin = () => {
    document.getElementsByClassName()
  }

  render() {
    return (<div className="SignIn">
      <form className="SignInForm">
        <p>Логин</p>
        <input type="text" size="40" className="SignInInput"></input>
        <p>Пароль</p>
        <input type="password" size="40" className="SignInInput"></input>
        <div className="Smscode">
          <p >Код смс</p>
          <input type="text" size="40" className="SignInInput"></input>
        </div>
        <p className="Enter" onClick={this.Signin}>Войти</p>
        <p className="Enter" onClick={this.props.regis}>Регистрация</p>
      </form>
    </div>);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      download: false,
      src: "public/image/profile.jpg",
      name: "Вадим",
      surname: "Урлик",
      person: "студент",
      status: "В сети"
    };
  }


  addPhoto = () => {
    this.setState({ download: true });
  }

  render() {
    var down = <p>Ваш профиль</p>;
    if (this.state.download) {
      down = <form enctype="multipart/form-data" >
        <input type="button" name="send" value="Отправить" />
        <input type="file" id="file" name="file" />
      </form>;

    }

    return (<div className="MyProfile">
      <div className="MyProfileList">
        <img src={this.state.src} className="MyProfileListImg" alt="альтернативный текст" />
        {down}
        <p>{this.state.name}</p>
        <p>{this.state.surname}</p>
        <p>{this.state.person}</p>
        <p>{this.state.status}</p>
        <p className="OtherProfileButton" onClick={this.addPhoto}>Загрузить фото</p>
      </div>
      <div className="map">
      </div>
    </div>);
  }
}


class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "public/image/otherprofile.jpg",
      name: "Александр",
      surname: "Вострокнутов",
      person: "преподаватель",
      status: "В сети"
    };
  }
  render() {
    return (<div className="OtherProfile">
      <div className="OtherProfileList">
        <img src={this.state.src} className="MyProfileListImg" alt="альтернативный текст" />
        <p>{this.state.name}</p>
        <p>{this.state.surname}</p>
        <p>{this.state.person}</p>
        <p>{this.state.status}</p>
        <p className="OtherProfileButton">Написать сообщение</p>
        <p className="OtherProfileButton">Добавить в чат</p>
      </div>
      <div className="map">
      </div>
    </div>);
  }
}


class SearchProfile extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (<div className="SearchProfile">
      <form className="SignInForm">
        <p>Найти</p>
        <select className="SignInInput">
          <option>Студент</option>
          <option>Преподаватель</option>
          <option>Другой работник вуза</option>
        </select>
        <p>Фамилия</p>
        <input type="text" className="SignInInput"></input>
        <p>Имя</p>
        <input type="text" className="SignInInput"></input>
        <p>Телефон</p>
        <input type="text" className="SignInInput"></input>

        <p className="Enter" onClick={this.registation}>Поиск</p>
      </form>
    </div>);
  }
}

class ListProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProfileArray: [
        {
          id: "id",
          name: "Александр",
          surname: "Вострокнутов",
          person: "преподаватель"
        },
        {
          id: "id",
          name: "Татьяна",
          surname: "Грубич",
          person: "преподаватель"
        },
        {
          id: "id",
          name: "Наталья",
          surname: "Ефанова",
          person: "преподаватель"
        },
        {
          id: "id",
          name: "Елена",
          surname: "Иванова",
          person: "преподаватель"
        }
      ],
    };
  }
  render() {
    return (<div className="SearchProfile">
      <div className="ListProfileForm">
        {
          this.state.ProfileArray.map((item, i) => {
            return (<div className="ListProfileDiv">{item.surname + " " + item.name}<p>{item.person}</p></div>);
          })
        }
      </div>
    </div>);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
class MailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listtype: 0,
      mail:[
      [{
        id: "",
        idin: "Вострокнутов Александр",
        subject: "Диплом",
        date: "09.06.2018",
      }, {
        id: "",
        idin: "Грубич Татьяна",
        subject: "Дедуктор",
        date: "11.06.2018",
      }, {
        id: "",
        idin: "Ефанова Наталья",
        subject: "C#",
        date: "10.06.2018",
      }],
       [{
        id: "",
        idin: "Безруков Дмитрий",
        subject: "Двигатели",
        date: "12.06.2018",
      }, {
        id: "",
        idin: "Журавлев Евгений",
        subject: "Машины",
        date: "11.06.2018",
      }, {
        id: "",
        idin: "Гапон Дмитрий",
        subject: "Свадьба",
        date: "11.06.2018",
      }]
    ]
    };

  }
  mailIn = () => {
    this.setState({ listtype: 0 });

  }
  mailOut = () => {
    this.setState({ listtype: 1 });

  }
  render() {
    var msgout = "От кого: ";
    if( this.state.listtype == 1){
      msgout = "Кому: ";
    }
    return (<div className="MailList">
      <div className="MailListForm">
        <div className="MailListFind">
          <p onClick={this.mailIn}>Входящие</p>
          <p onClick={this.mailOut}>Отправленные</p>
        </div>
        <div className="MailListItems">
          {
            this.state.mail[this.state.listtype].map((item, i) => {
              return (<div className="MailListItem"><p>Тема: {item.subject}</p><p>Дата: {item.date}</p><p>{msgout + item.idin}</p></div>);
            })
          }

        </div>
      </div>
    </div>);
  }
}


class MailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idin: "Вострокнутов Александр",
      date: "12.06.2018",
      subject: "Диплом",
      text: "Здравствуй Вадим. Выслал тебе экономическую эффективность. Делай свой диплом по образцу. Помни 13 числа нужно все принести."
    };
  }
  render() {
    return (<div className="MailView">
      <div className="MailViewForm">
        <p>От кого: {this.state.idin}</p>
        <p>Дата: {this.state.date}</p>
        <p>Тема: {this.state.subject}</p>
        <p>{this.state.text}</p>
        <div className="Attachmet">Скачать</div>
      </div>
    </div>);
  }
}


class MailSend extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (<div className="MailView">
      <form className="MailViewForm">
        <p>Кому: Вострокнутов Александр</p>
        <p>Дата: 10 06 2018</p>
        <p>Тема: </p>
        <input type="text" size="40" className="MailSendInput"></input>
        <textarea className="MailSendTextarea" name="text"></textarea>
        <input type="file" id="file" name="file" />
        <div className="SendMail">Отправить</div>
      </form>
    </div>);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex:0,
      MyChatList: [{
        id: "",
        name: "Общага 20",
        mess: [
          {
            name: "Журавлев Евгений",
            text:"У кого-нибуть есть дрель?"
          },{
            name: "Безруков Дмитрий",
            text:"У меня есть но я сейчас не в общаге"
          },{
            name: "Журавлев Евгений",
            text:"А когда будешь?"
          }
        ],
      }, {
        id: "",
        name: "Программирование",
        mess: [
          {
            name: "Журавлев Евгений",
            text:"Че пожрать есть?"
          },{
            name: "Безруков Дмитрий",
            text:"У меня есть но я сейчас не в общаге"
          },{
            name: "Журавлев Евгений",
            text:"Купи пива!"
          }
        ],
      }, {
        id: "",
        name: "Информационные системы",
        mess: [
          {
            name: "Урлик Вадим",
            text:"Что дарить будем?"
          },{
            name: "Безруков Дмитрий",
            text:"Пиво!"
          },{
            name: "Урлик Вадим",
            text:"Хорошая идея"
          }
        ],
      }, {
        id: "",
        name: "ИТ1421",
        mess: [
          {
            name: "Урлик Вадим",
            text:"Где пары?"
          },{
            name: "Безруков Дмитрий",
            text:"В общаге!"
          },{
            name: "Гапон Дмитрий",
            text:"Уже иду)"
          }
        ],
      }],
    };
  }

 setChatView = () =>{
   alert(this.refs.ChatListItem.props.listItem);
   
 }

  render() {
    return (<div className="Chat">
      <div className="ChatForm">
        <div className="ChatList">
        {
            this.state.MyChatList.map((item, i) => {
              return (<div className="ChatListItem" ref="ChatListItem" listItem={i} onClick={this.setChatView}><p>{item.name}</p></div>);
            })
          }
        </div>
        <div className="ChatCreate">
          <p>Создать чат группу</p>
          <input type="text" className="ChatCreateInput" />
          <p></p>
          <span className="ChatCreateButton">Создать</span>
          
        </div>
        <div className="ChatView">
        <div className="ChatViewItem"><center>{this.state.MyChatList[this.state.selectedIndex].name}</center></div>
        {
            this.state.MyChatList[this.state.selectedIndex].mess.map((item, i) => {
              return (<div className="ChatViewItem"><p>{item.name+":"}</p><p>{item.text}</p></div>);
            })
          }
        </div>
        <div className="ChatSendMess">
          <textarea className="ChatSendMessTextarea" name="text"></textarea>          
          <span className="ChatSendMessButton">Выйти</span>
          <span className="ChatSendMessButton">Участники</span>
          <span className="ChatSendMessButton">Отправить сообщение</span>
        </div>
      </div>
    </div>);
  }
}

class ViewChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      chatname:"Общага 20",
      MyChatList: [{
        id: "",
        name: "Ткаченко Алексей",
      }, {
        id: "",
        name: "Журавлев Евгений",
      }, {
        id: "",
        name: "Безруков Дмитрий",
      }, {
        id: "",
        name: "Гапон Дмитрий",
      }],
    };
  }
  render() {
    return (<div className="AddChatList">
      <div className="AddChatListForm">
      <div className="MyChatListItem"><p>Участники беседы</p><p>{this.state.chatname}</p></div>
        {
          this.state.MyChatList.map((item, i) => {
            return (<div className="MyChatListItem"><p>{item.name}</p><p className="OtherProfileButton">Удалить из комнаты</p></div>);
          })
        }
      </div>
    </div>);
  }
}

class AddChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      MyChatList: [{
        id: "",
        name: "Общага 20",
      }, {
        id: "",
        name: "Программирование",
      }, {
        id: "",
        name: "Информационные системы",
      }, {
        id: "",
        name: "ИТ1421",
      }],
    };
  }
  render() {
    return (<div className="AddChatList">
      <div className="AddChatListForm">
        {
          this.state.MyChatList.map((item, i) => {
            return (<div className="MyChatListItem"><p>{item.name}</p><p className="OtherProfileButton">Добавить в эту комнату</p></div>);
          })
        }
      </div>
    </div>);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorization: true,
      content: <ViewChatList />,
    };
  }

  RegisView = () => {
    this.setState({
      content: <Registation />,
      authorization: false,
    });
  }

  SigninView = () => {
    this.setState({
      content: <SignIn regis={this.RegisView} />,
      authorization: !this.state.authorization,
    });
  }
  MailView = () => {
    this.setState({
      content: <MailList />,
    });
  }
  ChatView = () => {
    this.setState({
      content: <Chat />,
    });
  }
  ProfileView = () => {
    this.setState({
      content: <MyProfile />,
    });
  }
  SearchView = () => {
    this.setState({
      content: <SearchProfile />,
    });
  }
  render() {
    var sigin = "Вход";
    if (this.state.authorization) {
      sigin = "Выйти";
    }
    var MainContent = this.state.content;
    return (<div className="MainScreen">
      <div className="MainMenu">
        <span className="signin" onClick={this.SigninView} >{sigin}</span>
        <span className="mail" onClick={this.MailView}>Почта</span>
        <span className="chat" onClick={this.ChatView}>Чат</span>
        <span className="profile" onClick={this.ProfileView}>Профиль</span>
        <span className="search" onClick={this.SearchView}>Найти</span>
      </div>
      {this.state.content}
    </div>);
  }
}

ReactDOM.render(
  <MainScreen />,
  document.getElementById('root')
);

