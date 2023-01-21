import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from '../context/firebase'

export const useGetData = (colection) => {
        const [list, setList] = useState([{vazia: true}])
          useEffect(() => {
              onValue(ref(db, colection), (snapshot) => {
                setList([]);
                const data = snapshot.val();
                if (data !== null) {
                  Object.values(data).map((lista) => {
                    setList((oldArray) => [...oldArray, lista]);
                  });
                }
              });
            }, [colection]);
        return [list, setList]
}