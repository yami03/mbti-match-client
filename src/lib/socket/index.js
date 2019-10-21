import io from 'socket.io-client';
import { MESSAGE, ERROR, JOIN, LEAVE } from '../../contants/socketEventTypes';

export default function() {
  const socket = io.connect('http://localhost:4001');
  console.log('내가 소켓이다');

  socket.on(ERROR, function(err) {
    console.log('received socket error:');
    console.log(err);
  });

  const receiveNewMessage = cb => {
    console.log('receiveNewMessage');
    socket.on(MESSAGE, cb);
  };

  const joinRoom = data => {
    console.log('join room front');
    socket.emit(JOIN, data);
  };

  const sendMessage = data => {
    console.log(data);
    socket.emit(MESSAGE, data);
  };

  const leaveRoom = roomId => {
    socket.removeListener(MESSAGE);
    socket.removeListener(ERROR);
    socket.emit(LEAVE, roomId);
  };

  return {
    joinRoom,
    sendMessage,
    receiveNewMessage,
    leaveRoom
  };
}
