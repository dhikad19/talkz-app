import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios';
import { ChatsPage, NavbarContainer, LogoTab, LogoutTab } from './ChatsElements'

const Chats = () => {

    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if (!user) {
            history.push('/')

            return;
        }
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": "288ab676-13e6-4adc-9b67-4e89eb4421be",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name);
                        axios.post('https://api.chatengine.io/users',
                            formdata,
                            { headers: { "private-key": "76a232d1-878f-4f0b-a94a-29db69db598b" } }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))
                    })
            })
    }, [user, history]);

    if (!user || loading) return 'Loading...'

    return (
        <ChatsPage>
            <NavbarContainer>
                <LogoTab>
                    Talkz
                </LogoTab>
                <LogoutTab onClick={handleLogout} className="logout-tab">
                    LogOut
                </LogoutTab>
            </NavbarContainer>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="288ab676-13e6-4adc-9b67-4e89eb4421be"
                userName={user.email}
                userSecret={user.uid}
            >

            </ChatEngine>
        </ChatsPage>
    )
}

export default Chats;