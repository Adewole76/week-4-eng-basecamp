import { useState } from "react";
import { useEffect} from "react";



const Dashboard = () => {
    const [loading , setLoading] = useState(true);
const [errorMessage, setErrorMessage] = useState('');
const [latValue, setLatValue] = useState(0);
const [lonValue, setLonValue] = useState(0);
const [datas, setData] = useState([]);
    useEffect(() => {
        const geoCodeLocation = async () =>{
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=2&appid=9a80b2c8aa0b827bab21df5b8dc07fcf`;
           
            try {
                const response = await fetch(url, {
                    method: 'GET'
                });
            
                if(!response.ok){
                    throw new Error(`request failed`)
                }
                const result = await response.json();
                setData(result);
                console.log(result[0]);
            } catch (error) {
                console.log(error);
            }
        }
       geoCodeLocation();     
    }, []);
    useEffect(()=> {
        console.log(datas);
    },[])
    return(
      <main>
       <input type="text" placeholder="Search for any citie weather" className="city-input" />
      </main>
    )
}
export default Dashboard