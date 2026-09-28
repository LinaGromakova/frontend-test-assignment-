import CreateChatForm from './CreateChatForm/CreateChatForm';
const CreateChatOverlay = () => {
  return (
    <div className='fixed h-screen w-full inset-0 bg-[rgba(0,0,0,0.25)] flex items-center justify-center z-300'>
      <CreateChatForm></CreateChatForm>
    </div>
  );
};
export default CreateChatOverlay;
