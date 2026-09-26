import { atom } from 'jotai';
import type { MessageInterface } from '@/shared';
const messagesAtom = atom<MessageInterface[]>([]);
export default messagesAtom;
