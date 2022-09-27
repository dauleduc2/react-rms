import * as React from 'react';
import { CustomFC } from '../../core/interface/component';
import { store } from '../../core/store';
import { userActions } from '../../core/store/slice';
import { userThunk } from '../../core/store/thunk';
import { getAuthKeyFromLocalStorage } from '../../util/localStorage';
interface GetCurrentUserWrapperProps extends CustomFC {}

export const GetCurrentUserWrapper: React.FC<GetCurrentUserWrapperProps> = ({
  children,
}) => {
  React.useEffect(() => {
    const token = getAuthKeyFromLocalStorage();
    if (token) {
      store.dispatch(userThunk.getCurrentUser());
    } else {
      store.dispatch(userActions.setIsTriedLogin(true));
    }
  }, []);

  return <>{children}</>;
};
