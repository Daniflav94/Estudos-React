import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  // 'parametro = null' indica que é opcional
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;
      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        if (search) {
          q = await query(
            collectionRef,
            where("tagsArray", "array-contains", search), // 'array-contains' é um parâmetro do firebase
            orderBy("createdAt", "desc")
          );
        } else if(uid) {
          q = await query(
            collectionRef,
            where("uid", "==", uid), // '==' é um parâmetro do firebase
            orderBy("createdAt", "desc")
          );
        }else {
          // vai buscar os registros pela ordem dos mais recentes
          q = await query(collectionRef, orderBy("createdAt", "desc"));
        }

        //vai mapear os dados, se houver alteração vai atualizar
        await onSnapshot(q, (QuerySnapshot) => {
          setDocuments(
            QuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);

        setLoading(false);
      }
    }

    loadData();
  }, [docCollection, search, uid, cancelled]); // só vai ser executada quando um desses dados sofrer alterações

  useEffect(() => {
    //faz limpeza de memória
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error }; //retorna como obj para poder acessar os itens individualmente
};
