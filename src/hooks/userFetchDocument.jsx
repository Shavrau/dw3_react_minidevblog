import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export const userFetchDocument = (dcoCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const loadDocument = async () => {
            setLoading(true)
            try {
                const docRef = await doc(db, dcoCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())
            } catch(error) {
                console.log(error)
                setError(error.message)
            }
            setLoading(false)
        }
        loadDocument()
    }, [dcoCollection, id])
    console.log(document)

    return{
        document,
        loading,
        error
    }
}