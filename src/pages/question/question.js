import React, { useEffect} from 'react'
import axiosInstance from '../../helpers/interceptors';
export default function Question() {
    useEffect(() => {
		axiosInstance.get('/questions').then(res => console.log(res))
	}, []);
    return (
        <div>
            <h1>hello question</h1>
        </div>
    )
}
