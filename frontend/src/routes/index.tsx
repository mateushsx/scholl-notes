import {createBrowserRouter} from 'react-router-dom';
import {userRouter} from './user-routes';

export const router = createBrowserRouter([...userRouter]);
