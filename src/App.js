import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Components/Layouts';
import { publicRoutes } from './Routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Pages = route.component;
                        const Layout = DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Pages></Pages>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
