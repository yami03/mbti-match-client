import io from 'socket.io-client';
import { MESSAGE, ERROR, JOIN, LEAVE } from '../../contants/socketEventTypes';
import ROOT from '../../config';

export default function() {
  const socket = io.connect(ROOT, {
    transports: ['websocket'],
    upgrade: false
  });

  socket.on(ERROR, function(err) {
    console.log(err);
  });

  const receiveNewMessage = cb => {
    socket.on(MESSAGE, cb);
  };

  const joinRoom = data => {
    socket.emit(JOIN, data);
  };

  const sendMessage = data => {
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
