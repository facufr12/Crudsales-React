// import node module libraries
import React, { useReducer, useState } from 'react';

// import context file
import { ChatContext } from 'context/Context';


// import reducer file
import { ChatReducer } from 'reducers/ChatReducer';

const ChatProvider = ({ children }) => {
	const [activeThread, setActiveThread] = useState(ChatThreadsData[0]);

	const [ChatState, ChatDispatch] = useReducer(ChatReducer, {
		messages: MessagesData,
		threads: ChatThreadsData,
		users: UsersList,
		groups: ChatGroupsData,
		loggedInUserId: 21,
		activeThread,
		setActiveThread
	});

	return (
		<ChatContext.Provider value={{ ChatState, ChatDispatch }}>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatProvider;
