import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect, useRef } from 'react';
import { message } from 'antd';
import { Spin } from 'antd';
import styles from './index.less';
import TableEditCell from './TableEditCell';
import ButtonMultiple from './ButtonMultiple';
import { ModalState } from './model';
import { connect } from 'umi';


const key = 'updatable';



const Applications: React.FC<ModalState> = (props) => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    // const [newMessage, setNewMessage] = useState("");
    // const [messages, setMessages] = useState(["Test message"]);

    // const [state, setState] = useState({
    //     messages: ["Test message"],
    //     newMessageText: ""
    // });

    const socket = useRef(new WebSocket("wss://analytics.bmocm.com/websocket?eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYm1vY20iLCJyb2xlX2lkIjpudWxsLCJzdWIiOiJCTU9DTSBBbmFseXRpY3MiLCJleHAiOjE1OTEwMzYxMzJ9.JIvFNpzGz9Tmca_Cq6HaRONgAz5WmNg4ByXVEomyWkP5swT-VUBoTFMQizAo-GplnSlGnAQ1LlXeysEwC3t0Zg"))

    useEffect(() => {
        socket.current.onmessage = (msg) => {
            console.log(msg.data)
            message.success({ content: 'Success!', key, duration: 5 });
            // const incomingMessage = `Message from WebSocket: ${msg.data}`;
            // setMessages(messages.concat([incomingMessage]));
        }
    });

    // useEffect(() => () => socket.current.close(), [socket])

    const onMessageChange = (e) => {
        setNewMessage(e.target.value);
    }

    const onMessageSubmit = () => {
        const { list } = props;
        console.log("onMessageSubmit")
        message.loading({ content: 'Sending Order ...', key });
        console.log(list)
        socket.current.send("government.canadacurve");
        // setNewMessage("")
    }

    const onSocketClose = () => {
        console.log("Closing socket")
        socket.current.close()
    }

    return (
        <PageHeaderWrapper title="" content="Trading Interface" className={styles.main}>
            <ButtonMultiple onMessageSubmit={onMessageSubmit} onSocketClose={onSocketClose} />
            <br />
            <TableEditCell />
            {/* <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div> */}
        </PageHeaderWrapper>
    );
};

export default connect(({ trade }: { trade: ModalState }) => ({ list: trade.list }))(Applications);
