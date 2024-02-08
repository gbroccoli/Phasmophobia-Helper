import {Outlet} from "react-router-dom"
import {FC} from "react"
import Layout from "./layout/layout";

const Index: FC = () => {

    return (
        <>
        <Layout>
        <Outlet/>
        </Layout>
        </>
    )
}

export default Index;