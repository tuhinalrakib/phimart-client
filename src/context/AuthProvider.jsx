import { AuthContext } from './AuthContext';
import useAuth from '../hooks/useAuth';

const AuthProvider = ({ children }) => {
    const allAuthContext = useAuth()

    return (
        <AuthContext value={allAuthContext}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider