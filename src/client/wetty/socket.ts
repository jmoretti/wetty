import io from 'socket.io-client';

const userRegex = new RegExp('ssh/([^/]+)(?=[/\r\n?]|$)');
const commandRegex = new RegExp('command/([^/]+)(?=[/\r\n?]|$)');
export const trim = (str: string): string => str.replace(/\/*$/, '');

const userTrimmedSocketBase = trim(window.location.pathname).replace(userRegex, '');
const socketBase = trim(userTrimmedSocketBase).replace(commandRegex, '');
export const socket = io(window.location.origin, {
  path: `${trim(socketBase)}/socket.io`,
});
