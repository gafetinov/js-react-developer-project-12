import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthToken} from "../../Hooks/useAuthToken";
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from "../../Slices/sharedActions";
import {selectors as messagesSelectors} from "../../Slices/messagesSlice";
import {selectors as channelsSelectors} from "../../Slices/chanelsSlice";

export const MainPage = () => {
    const channels = useSelector(state => channelsSelectors.selectAll(state.channels));
    const messages = useSelector(state => messagesSelectors.selectAll(state.messages));
    const currentChannelId = useSelector(state => state.currentChannel.id);
    const dispatch = useDispatch();
    const { getToken } = useAuthToken();
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate("login", { replace: true });
        } else {
            dispatch(fetchData(token));
        }
    }, []);

    console.log(channels);

    return (
        <article>
            <h1>Главная страница</h1>
            <div>Текущий канал: {currentChannelId}</div>
            <div>каналы: {channels.map(x => x.name).join(", ")}</div>
            <div>сообщения: {messages.toString()}</div>
    </  article>
    );
}
