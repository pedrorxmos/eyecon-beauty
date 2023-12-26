import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import db from '../firebase/db';

export const fetchDoc = async <T>(route: string): Promise<T> => {
	const res = await getDoc(doc(db, route));
	const data: Promise<T> = res.data() as Promise<T>;
  console.log(data)
	return data;
};

export const fetchCollection = async <T>(route: string): Promise<T> => {
	const col = await getDocs(collection(db, route));
	const res: any = {};
	col.forEach((item) => (res[item.id] = item.data()));
	return res as Promise<T>;
};
