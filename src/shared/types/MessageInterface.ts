export default interface MessageInterface {
  content: string;
  messageId: string;
  isOtherSender: boolean;
  senderName?: string;
  senderAt: string;
  status?: 'error' | 'loading' | 'success';
}
