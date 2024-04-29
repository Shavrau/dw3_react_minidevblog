import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";

const userAuthentication = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      throw new Error("Operação cancelada");
    }
  };


  
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.error(error);
      let systemErrorMessage;

      switch (error.code) {
        case "auth/email-already-in-use":
          systemErrorMessage = "Email já cadastrado";
          break;
        case "auth/weak-password":
          systemErrorMessage = "Senha fraca";
          break;
        default:
          systemErrorMessage = "Erro ao criar usuário";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };



  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error(error);
      let systemErrorMessage;

      switch (error.code) {
        case "auth/user-not-found":
          systemErrorMessage = "Usuário não encontrado";
          break;
        case "auth/wrong-password":
          systemErrorMessage = "Senha incorreta";
          break;
        default:
          systemErrorMessage = "Erro ao logar";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = async () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, [cancelled]);

  return {
    auth,
    createUser,
    login,
    logout,
    error,
    loading,
    cancelled,
  };
};

export { userAuthentication };
