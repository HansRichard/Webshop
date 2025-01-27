import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <h2>Add New Product</h2>
                <ProductForm />
            </div>

            <div style={{ flex: 2 }}>
                <h1>Product List</h1>
                <ProductList />
            </div>
        </div>
    );
};

export default App;


//interface Forecast {
//    date: string;
//    temperatureC: number;
//    temperatureF: number;
//    summary: string;
//}

//function App() {
//    const [forecasts, setForecasts] = useState<Forecast[]>();

//    useEffect(() => {
//        populateWeatherData();
//    }, []);

//    const contents = forecasts === undefined
//        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//        : <table className="table table-striped" aria-labelledby="tableLabel">
//            <thead>
//                <tr>
//                    <th>Date</th>
//                    <th>Temp. (C)</th>
//                    <th>Temp. (F)</th>
//                    <th>Summary</th>
//                </tr>
//            </thead>
//            <tbody>
//                {forecasts.map(forecast =>
//                    <tr key={forecast.date}>
//                        <td>{forecast.date}</td>
//                        <td>{forecast.temperatureC}</td>
//                        <td>{forecast.temperatureF}</td>
//                        <td>{forecast.summary}</td>
//                    </tr>
//                )}
//            </tbody>
//        </table>;

//    return (
//        <div>
//            <h1 id="tableLabel">Weather forecast</h1>
//            <p>This component demonstrates fetching data from the server.</p>
//            {contents}
//        </div>
//    );

//    async function populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const test = await fetch('api/product/get');
//        console.log(test);
//        console.log(response);
//        if (response.ok) {
//            const data = await response.json();
//            setForecasts(data);
//        }
//    }
//}