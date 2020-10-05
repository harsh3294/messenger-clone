import React , {forwardRef} from 'react'
import './Message.css'
import { CardContent, Typography, Card } from '@material-ui/core'


const Message= forwardRef(({message,username},ref)=> {
    const isUser=username===message.username;
    return (
      <div ref={ref} className={`message ${isUser && 'message__user'}`}>  
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
            <CardContent>
                <Typography color="white" 
                    >
                        {!isUser && `${message.username || 'Unknown'}  :`} {message.message}
                    </Typography>
            </CardContent>
        </Card>
        </div>
    )
}
);

export default Message
