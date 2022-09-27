import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../store';
import { selectUserStore } from '../store/selector';

interface UnAuthGuardProps {}

const UnAuthGuard: React.FunctionComponent<UnAuthGuardProps> = () => {
  const navigate = useNavigate();
  const { isTriedLogin, user } = useAppSelector(selectUserStore);

  useEffect(() => {
    if (isTriedLogin && user?.id) {
      //TODO: send notification
      alert('You are already logged in');
      navigate('/');
    }
  }, [isTriedLogin, user?.id, navigate]);

  return <Outlet />;
};

export default UnAuthGuard;
