import React from 'react'
import { ChatEngine } from 'react-chat-engine'

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed'
import './App.scss'


const App = () => {

	
	return (
<ChatEngine
height="100vh"
projectID="46a714dd-257a-4d7c-ac80-7355ff2e8c2b"
userName="devarrrt"
userSecret="devarrrt"
renderChatFeed = { ( chatAppProps ) => <ChatFeed { ...chatAppProps } /> }
/>
	)
}

export default App
