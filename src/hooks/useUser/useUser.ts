import React from 'react';
import { UserContext } from 'contexts';

const useUser = () => React.useContext(UserContext);

export default useUser;
