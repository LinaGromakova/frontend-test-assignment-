import greenApiStoreAtom from '@/shared/libs/greenApiStore';
import phoneNumberAtom from '@/shared/model/phoneNumber';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useIsLogin = () => {
  const { idInstance, apiTokenInstance } = useAtomValue(greenApiStoreAtom);
  const phoneNumber = useAtomValue(phoneNumberAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (!idInstance.trim() || !apiTokenInstance.trim()) {
      navigate('/login');
      return;
    }
    if (!phoneNumber) {
      navigate('/');
      return;
    }
  }, [idInstance, apiTokenInstance, phoneNumber]);
};

export default useIsLogin;
