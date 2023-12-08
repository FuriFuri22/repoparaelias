import React from 'react';
import { Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Button title="Cerrar Sesión" onPress={handleLogout} />
  );
}
