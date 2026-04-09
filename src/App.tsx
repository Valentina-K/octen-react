import './App.css'
import {Outlet} from "react-router";
import {MainMenu} from "./layout/MainMenu.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainMenu/>
            <Outlet/>
        </QueryClientProvider>
    )
}

export default App
