import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import db from '../firebase/db';

export const useDoc = async (route: string) => {
	const res = await getDoc(doc(db, route));
	return res.data() || { error: 'There was an error' };
};

export const useCollection = async (route: string) => {
	const col = await getDocs(collection(db, route));
	const res: any = {};
	col.forEach((item) => (res[item.id] = item.data()));
	return res || { error: 'There was an error' };
};
