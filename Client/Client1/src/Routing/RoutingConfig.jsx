import { Route,createBrowserRouter,createRoutesFromChildren } from "react-router-dom";
import * as main from '../Pages/AllPage'
import ProtectedComp from "../Component/ProtectedComp";
export const RouteConfig=createBrowserRouter(createRoutesFromChildren(
    <Route path="/" element={<main.RootPage/>}>
        <Route index element={<main.HomePage/>}></Route>
        <Route path="/login" element={<main.LoginPage/>} ></Route>
        <Route path="/about" element={<main.AboutPage/>} ></Route>
        <Route path="/signup" element={<main.SignupPage/>} ></Route>
        
        


        {/* Protected Routes */}
        <Route path="/products" element={<ProtectedComp child={<main.AllProductsPage/>} />} />
        <Route path="/addproduct" element={<ProtectedComp child={<main.AddNewProductPage/>} />} />
        
    </Route>
))