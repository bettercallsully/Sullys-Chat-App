import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="6fba601d-ff36-4c03-8bd2-4a62f6a8703b"
        userName="bettercallsully"
        userSecret="1996"
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
        />
    )
}

export default App;