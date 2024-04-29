import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/user';

const key = 'users'

export const useGetUsers = () => {
    return useQuery([key], getUsers);
}
