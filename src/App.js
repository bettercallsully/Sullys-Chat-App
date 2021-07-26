import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>  {
if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
        height="100vh"
        projectID="6fba601d-ff36-4c03-8bd2-4a62f6a8703b"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
        />
    )
}

export default App;