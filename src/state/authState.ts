import { atom } from 'recoil';
import { Session } from 'next-auth';

export const authState = atom<Session | null>({
  key: 'authState',
  default: null,
});
