import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';
import { selectUserStore } from '../store/selector';

interface AuthWrapperProps {}

const AuthGuard: React.FunctionComponent<AuthWrapperProps> = () => {
  const navigate = useNavigate();
  const { isTriedLogin, user } = useAppSelector(selectUserStore);

  useEffect(() => {
    if (isTriedLogin && !user?.id) {
      //TODO: send notification
      alert('You are not logged in');
      navigate('/login');
    }
  }, [isTriedLogin, navigate, user?.id]);

  return <Outlet />;
};

export default AuthGuard;
